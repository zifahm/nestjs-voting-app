import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UserResolver, UserService],
  controllers: [UserController],
  exports: [TypeOrmModule.forFeature([UserRepository])],
})
export class UserModule {}
