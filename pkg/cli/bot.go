package cli

import (
	"github.com/spf13/cobra"

	"github.com/taku-k/ipdrawer/pkg/bot"
)

var slackBotCmd = &cobra.Command{
	Use:   "slack-bot",
	Short: "Runs slack bot",
	RunE:  startSlackBot,
}

func startSlackBot(cmd *cobra.Command, args []string) error {
	l := bot.NewSlackListner(cfg.BotName, cfg.SlackToken)
	l.ListenAndResponse()
	return nil
}
