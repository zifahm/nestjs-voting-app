import { Repository } from 'typeorm';
import { Poll } from './poll.entity';
import { PollOption } from './pollOption.entity';
export declare class PollRepository extends Repository<Poll> {
}
export declare class PollOptionRepository extends Repository<PollOption> {
}
