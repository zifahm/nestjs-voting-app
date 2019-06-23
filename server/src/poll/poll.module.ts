import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { PollOptionRepository, PollRepository } from './poll.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PollRepository, PollOptionRepository]),
    UserModule,
  ],
})
export class PollModule {}
