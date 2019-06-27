import { UseGuards } from '@nestjs/common';
import {
  Args,
  Context,
  Mutation,
  Query,
  ResolveProperty,
  Resolver,
  Root,
} from '@nestjs/graphql';
import { MyContext } from '../types/myContext';
import { AllPollsArgs } from './args/allPollsArgs';
import { CreatePollArgs } from './args/createPollArgs.args';
import { AuthGuard } from './auth.guard';
import { GetUserId } from './getUserId.decorator';
import { Poll } from './poll.entity';
import { PollService } from './poll.service';
import { PollOption } from './pollOption.entity';

@Resolver(() => Poll)
export class PollResolver {
  constructor(private readonly pollService: PollService) {}
  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  async createPoll(
    @GetUserId() userId: string,
    @Args() { name, options }: CreatePollArgs,
  ): Promise<Boolean> {
    return this.pollService.createPoll(userId, name, options);
  }
  @Mutation(() => Boolean)
  async vote(
    @Context() ctx: MyContext,
    @Args('pollOptionId') pollOptionId: number,
  ): Promise<Boolean> {
    return this.pollService.vote(ctx, pollOptionId);
  }

  @Query(() => Poll)
  async poll(@Args('id') id: number): Promise<Poll> {
    return this.pollService.poll(id);
  }

  @Query(() => [Poll])
  async allPolls(@Args() { take, skip }: AllPollsArgs): Promise<Poll[]> {
    return this.pollService.allPolls(take, skip);
  }

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  async deletePoll(
    @Context() ctx: MyContext,
    @Args('id') id: number,
  ): Promise<Boolean> {
    return this.pollService.deletePoll(ctx, id);
  }

  @Query(() => [Poll])
  @UseGuards(AuthGuard)
  async myPoll(@GetUserId() userId: string): Promise<Poll[]> {
    return this.pollService.myPoll(userId);
  }

  @ResolveProperty('pollOption')
  async pollOption(
    @Root() poll: Poll,
    @Context() ctx: MyContext,
  ): Promise<PollOption[]> {
    return await ctx.pollOptionLoader.load(poll.id);
  }
}
