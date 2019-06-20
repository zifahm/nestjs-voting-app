import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class ErrorResponse {
  @Field()
  path: string;
  @Field()
  message: string;
}
