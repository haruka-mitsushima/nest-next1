import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, ValidationPipe } from '@nestjs/common';
import cookieParser, * as CookieParser from 'cookie-parser';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3000'],
  });
  app.use(cookieParser());
  await app.listen(3005);
}
bootstrap();
