import { Field, InputType } from 'type-graphql';
import { User } from '../user.entity';

@InputType({ description: 'Login Input' })
export class LoginInput implements Partial<User> {
  @Field()
  email: string;

  @Field()
  password: string;
}
