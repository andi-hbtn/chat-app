import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }));
  app.enableCors({ credentials: true })
  //duam qe cookie te behen parse dhe te behen attach ne incoming req obj
  app.use(cookieParser());
  await app.listen(3001);
}
bootstrap();
