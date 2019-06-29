import * as Dataloader from 'dataloader';
import { getRepository } from 'typeorm';
import { Poll } from '../poll/poll.entity';

export const pollOptionLoader = () =>
  new Dataloader(async (keys: number[]) => {
    const poll = await getRepository(Poll)
      .createQueryBuilder('poll')
      .leftJoinAndSelect('poll.pollOption', 'pollOption')
      .where('poll.id IN (:...keys)', { keys })
      .getMany();
    return poll.map(poll => poll.pollOption);
  });
