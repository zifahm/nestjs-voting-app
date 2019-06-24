import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Poll } from './poll.entity';

@Entity()
export class PollOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  text: string;

  @Column('integer')
  votes: number;

  @Column()
  pollId: number;

  @ManyToOne(() => Poll, poll => poll.pollOption)
  poll: Promise<Poll>; // generated a  pollId
}
