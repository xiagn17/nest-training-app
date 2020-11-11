interface MongodbConfiguration {
  readonly mongoUrl: string,
}

export const mongodbConfiguration =  (): MongodbConfiguration => ({
  mongoUrl: process.env.MONGO_URL,
});
