import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { INestApplication, Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appPort = getAppPort(app);
  await app.listen(appPort);
  Logger.debug(`App is booted up on ${appPort} port`)
}
bootstrap();

function getAppPort(app: INestApplication): string {
  const config = app.get<ConfigService>(ConfigService);
  return config.get<string>('appPort');
}
