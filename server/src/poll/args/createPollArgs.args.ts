import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class CreatePollArgs {
  @Field()
  name: string;

  @Field(() => [String])
  options: string[];
}
