import { CreateCarsBrandInput } from './create-cars-brand.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateCarsBrandInput extends PartialType(CreateCarsBrandInput) {
  @Field(() => String)
  @IsNotEmpty()
  _id: string;
  @Field(() => String)
  @IsNotEmpty()
  name: string;
}
