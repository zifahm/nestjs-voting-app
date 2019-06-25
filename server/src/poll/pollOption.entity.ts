import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Poll } from './poll.entity';
@ObjectType()
@Entity()
export class PollOption {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text')
  text: string;

  @Field()
  @Column('integer')
  votes: number;

  @Field()
  @Column()
  pollId: number;

  @ManyToOne(() => Poll, poll => poll.pollOption)
  poll: Promise<Poll>; // generated a  pollId
}
