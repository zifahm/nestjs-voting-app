import { Poll } from '../poll/poll.entity';
export declare class User {
    id: string;
    userName: string;
    email: string;
    password: string;
    confirmed: boolean;
    poll: Promise<Poll[]>;
}
