import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class AllPollsArgs {
  @Field()
  take: number;

  @Field()
  skip: number;
}
