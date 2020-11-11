interface AppConfiguration {
  readonly appPort: string
}

export const appConfiguration = (): AppConfiguration => ({
  appPort: process.env.APP_PORT
})
