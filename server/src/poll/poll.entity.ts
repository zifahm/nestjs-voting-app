import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { PollOption } from './pollOption.entity';

@Entity()
export class Poll {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column()
  userId: string;

  @ManyToOne(() => User, user => user.poll)
  user: Promise<User>; // generated a userId

  @OneToMany(() => PollOption, pollOption => pollOption.poll)
  pollOption: Promise<PollOption[]>;
}
