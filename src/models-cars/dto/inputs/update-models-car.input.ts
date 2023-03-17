import { CreateModelsCarInput } from './create-models-car.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateModelsCarInput extends PartialType(CreateModelsCarInput) {
  @Field(() => ID)
  @IsNotEmpty()
  _id: string;
  @Field(() => String)
  @IsNotEmpty()
  name: string;
  @Field(() => String, { nullable: true })
  brand?: string;
}
