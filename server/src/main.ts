import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import * as session from 'express-session';
import { AppModule } from './app.module';
import { SESSION_SECRET } from './constants';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      name: 'votinapp',
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { httpOnly: true, secure: process.env.NODE_ENV === 'production' },
    }),
  );
  await app.listen(3000);
}
bootstrap();
