import { MyContext } from '../types/myContext';
import { Poll } from './poll.entity';
import { PollOptionRepository, PollRepository } from './poll.repository';
export declare class PollService {
    private readonly pollRepo;
    private readonly pollOptionRepo;
    constructor(pollRepo: PollRepository, pollOptionRepo: PollOptionRepository);
    createPoll(userId: string, name: string, options: string[]): Promise<Boolean>;
    vote(ctx: MyContext, pollOptionId: number): Promise<Boolean>;
    poll(id: number): Promise<Poll>;
    allPolls(take: number, skip: number): Promise<Poll[]>;
    deletePoll(ctx: MyContext, id: number): Promise<Boolean>;
    myPoll(userId: string): Promise<Poll[]>;
}
