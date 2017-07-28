package cli

func init() {
	rootCmd.AddCommand(
		startCmd,
		versionCmd,
	)
}
