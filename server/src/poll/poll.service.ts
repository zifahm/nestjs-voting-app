import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { POLL_OPTION_ID_PREFIX } from '../constants';
import { redis } from '../redis';
import { MyContext } from '../types/myContext';
import { Poll } from './poll.entity';
import { PollOptionRepository, PollRepository } from './poll.repository';

@Injectable()
export class PollService {
  constructor(
    @InjectRepository(PollRepository)
    private readonly pollRepo: PollRepository,

    @InjectRepository(PollOptionRepository)
    private readonly pollOptionRepo: PollOptionRepository,
  ) {}
  async createPoll(
    userId: string,
    name: string,
    options: string[],
  ): Promise<Boolean> {
    const poll = await this.pollRepo.insert({
      name,
      userId,
    });

    options.map(async text => {
      await this.pollOptionRepo.insert({
        text,
        votes: 0,
        pollId: poll.raw[0].id,
      });
    });

    return true;
  }

  async vote(ctx: MyContext, pollOptionId: number): Promise<Boolean> {
    const pollOption = await this.pollOptionRepo.findOne({
      where: { id: pollOptionId },
    });

    const ip =
      ctx.req.header('x-forwarded-for') || ctx.req.connection.remoteAddress;

    if (ip) {
      const hasIp = await redis.sismember(
        `${POLL_OPTION_ID_PREFIX}${pollOption.pollId}`,
        ip,
      );
      if (hasIp) {
        return false;
      }
    }

    await this.pollOptionRepo.update(
      { id: pollOptionId },
      { votes: pollOption.votes + 1 },
    );

    await redis.sadd(`${POLL_OPTION_ID_PREFIX}${pollOption.pollId}`, ip);
    return true;
  }

  async poll(id: number): Promise<Poll> {
    return await this.pollRepo.findOne({
      where: { id },
      relations: ['pollOption'],
    });
  }

  async allPolls(take: number, skip: number): Promise<Poll[]> {
    return this.pollRepo
      .createQueryBuilder('poll')
      .innerJoinAndSelect('poll.pollOption', 'pollOption')
      .orderBy('poll.name', 'ASC')
      .take(take)
      .skip(skip)
      .getMany();
  }

  async deletePoll(ctx: MyContext, id: number): Promise<Boolean> {
    try {
      await this.pollRepo.delete({ id });
      const ip =
        ctx.req.header('x-forwarded-for') || ctx.req.connection.remoteAddress;

      await redis.srem(`${POLL_OPTION_ID_PREFIX}${id}`, ip);
    } catch (err) {
      return false;
    }
    return true;
  }

  async myPoll(userId: string): Promise<Poll[]> {
    return await this.pollRepo.find({ where: { userId } });
  }
}
