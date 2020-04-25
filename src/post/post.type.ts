import { ObjectType, ID, Field } from '@nestjs/graphql';

@ObjectType('Post')
export class PostType {
  @Field(type => ID)
  id: number;

  @Field(type => String)
  title: string;

  @Field(type => String)
  description: string;
}
