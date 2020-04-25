import { InputType, Field } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class PostInput {
  @Field()
  @MaxLength(20)
  title: string;

  @Field()
  @MaxLength(200)
  description: string;
}
