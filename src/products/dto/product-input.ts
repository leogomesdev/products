import { IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from 'type-graphql';

@InputType()
export class ProductInput {
  @Field()
  @MinLength(1)
  @IsNotEmpty()
  name: string;
}