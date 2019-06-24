import { UseGuards } from '@nestjs/common';
import { Mutation, Resolver } from '@nestjs/graphql';
import { AuthGuard } from './auth.guard';

@Resolver('Poll')
export class PollResolver {
  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  async createPoll() {
    return true;
  }
}
