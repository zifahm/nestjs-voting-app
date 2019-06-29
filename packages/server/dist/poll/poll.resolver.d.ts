import { MyContext } from '../types/myContext';
import { AllPollsArgs } from './args/allPollsArgs';
import { CreatePollArgs } from './args/createPollArgs.args';
import { Poll } from './poll.entity';
import { PollService } from './poll.service';
import { PollOption } from './pollOption.entity';
export declare class PollResolver {
    private readonly pollService;
    constructor(pollService: PollService);
    createPoll(userId: string, { name, options }: CreatePollArgs): Promise<Boolean>;
    vote(ctx: MyContext, pollOptionId: number): Promise<Boolean>;
    poll(id: number): Promise<Poll>;
    allPolls({ take, skip }: AllPollsArgs): Promise<Poll[]>;
    deletePoll(ctx: MyContext, id: number): Promise<Boolean>;
    myPoll(userId: string): Promise<Poll[]>;
    pollOption(poll: Poll, ctx: MyContext): Promise<PollOption[]>;
}
