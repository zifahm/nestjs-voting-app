import { Poll } from './poll.entity';
export declare class PollOption {
    id: number;
    text: string;
    votes: number;
    pollId: number;
    poll: Promise<Poll>;
}
