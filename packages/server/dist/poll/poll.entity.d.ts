import { User } from '../user/user.entity';
import { PollOption } from './pollOption.entity';
export declare class Poll {
    id: number;
    name: string;
    userId: string;
    user: Promise<User>;
    pollOption: Promise<PollOption[]>;
}
