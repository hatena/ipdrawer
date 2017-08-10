package cli

func init() {
	{
		//f := startCmd.Flags()

	}

	rootCmd.AddCommand(
		startCmd,
		importCmd,
		versionCmd,
	)
}
