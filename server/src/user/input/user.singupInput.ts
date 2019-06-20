import { Field, InputType } from 'type-graphql';
import { User } from '../user.entity';

@InputType({ description: 'Signup Input' })
export class SignupInput implements Partial<User> {
  @Field()
  userName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
