import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Poll } from './poll.entity';

@Entity()
export class PollOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  text: string;

  @Column('integer')
  votes: number;

  @ManyToOne(() => Poll, poll => poll.pollOption)
  @JoinColumn()
  poll: Promise<Poll>; // generated a  pollId
}
