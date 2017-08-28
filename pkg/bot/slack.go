package bot

import (
	"fmt"
	"log"
	"strings"

	"github.com/nlopes/slack"
)

type SlackListener struct {
	name   string
	client *slack.Client
}

func NewSlackListner(botname, token string) *SlackListener {
	return &SlackListener{
		name:   botname,
		client: slack.New(token),
	}
}

func (s *SlackListener) ListenAndResponse() {
	// Start listening slack events
	rtm := s.client.NewRTM()
	go rtm.ManageConnection()

	// Handle slack events
	for msg := range rtm.IncomingEvents {
		switch ev := msg.Data.(type) {
		case *slack.MessageEvent:
			if err := s.handleMessageEvent(ev); err != nil {
				log.Printf("[ERROR] Failed to handle message: %s", err)
			}
		}
	}
}

func (s *SlackListener) handleMessageEvent(ev *slack.MessageEvent) error {
	msg := ev.Text
	// Validate to make sure that message is mentioned to this bot
	if strings.HasPrefix(msg, "<@") {
		user, err := s.client.GetUserInfo(msg[2:strings.Index(msg, ">")])
		if err != nil {
			return err
		}
		if user.Name != s.name {
			return nil
		}
		fmt.Printf("%#+v\n", ev)
	}
	return nil
}
