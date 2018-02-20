package cli

import (
	"bytes"
	"context"
	"errors"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"
	"text/tabwriter"
	"time"

	"github.com/spf13/cobra"

	"github.com/hatena/ipdrawer/pkg/bot"
	"github.com/hatena/ipdrawer/pkg/build"
	"github.com/hatena/ipdrawer/pkg/server"
	"github.com/hatena/ipdrawer/pkg/utils/tracer"
)

var startCmd = &cobra.Command{
	Use:   "start",
	Short: "Runs server",
	RunE:  startServer,
}

func startServer(cmd *cobra.Command, args []string) error {
	if len(args) > 0 {
		return usageAndError(cmd)
	}

	if cfg.EnableTracer {
		closer := tracer.SetupTracer()
		defer closer.Close()
	}

	// Signal
	signalCh := make(chan os.Signal, 1)
	signal.Notify(signalCh, syscall.SIGINT, syscall.SIGTERM, syscall.SIGQUIT)

	s := server.NewServer(cfg)

	errCh := make(chan error, 1)

	// Server
	go func() {
		if err := func() error {
			var buf bytes.Buffer
			info := build.GetInfo()
			tw := tabwriter.NewWriter(&buf, 2, 1, 2, ' ', 0)
			fmt.Fprintf(tw, "ipdrawer server starting at %s\n", time.Now())
			fmt.Fprintf(tw, "Go version:\t%s\n", info.GoVersion)
			fmt.Fprintf(tw, "Tag:\t%s\n", info.Tag)
			fmt.Fprintf(tw, "Revision:\t%s\n", info.Revision)
			fmt.Fprintf(tw, "port:\t%s\n", cfg.Port)
			if err := tw.Flush(); err != nil {
				return err
			}
			msg := buf.String()
			fmt.Fprint(os.Stderr, msg)

			// Start server
			if err := s.Start(); err != nil {
				return err
			}

			return nil
		}(); err != nil {
			errCh <- err
		}
	}()

	// Bot
	if cfg.BotToken != "" && cfg.BotID != "" {
		go func() {
			l := bot.NewSlackListner(cfg.BotID, cfg.BotToken)
			l.ListenAndResponse()
		}()
	}

	select {
	case err := <-errCh:
		log.Printf("ipdrawer server is failed: %v\n", err)
		os.Exit(1)
	case sig := <-signalCh:
		log.Printf("received signal '%s'\n", sig)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	stopped := make(chan struct{}, 1)
	go s.Shutdown(ctx, stopped)
	select {
	case <-ctx.Done():
		fmt.Fprintln(os.Stdout, "time limit reached, initiating hard shutdown")
		return errors.New("Server is failed")
	case <-stopped:
		log.Println("server shutdown completed")
		fmt.Fprintln(os.Stdout, "server shutdown completed")
		break
	}
	return nil
}
