import { NestFactory } from '@nestjs/core';
import * as Store from 'connect-redis';
import * as dotenv from 'dotenv';
import * as session from 'express-session';
import { AppModule } from './app.module';
import { SESSION_SECRET } from './constants';
import { redis } from './redis';

dotenv.config();

async function bootstrap() {
  const RedisStore = Store(session);

  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      name: 'votingapp',
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: true,
        maxAge: 1000 * 60 * 60 * 24 * 365,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
