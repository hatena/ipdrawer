package envutil

import (
	"os"
	"testing"
)

func TestEnvOrDefault(t *testing.T) {
	os.Clearenv()
	os.Setenv("POLYMERASE_X", "0")
	if act := EnvOrDefaultString("POLYMERASE_X", "1"); act != "0" {
		t.Errorf("expected %s, got %s", "0", act)
	}
	os.Clearenv()
	if act := EnvOrDefaultString("POLYMERASE_X", "1"); act != "1" {
		t.Errorf("expected %s, got %s", "1", act)
	}
}
