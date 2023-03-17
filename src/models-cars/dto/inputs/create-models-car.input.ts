import { InputType, Field } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateModelsCarInput {
  @Field(() => String)
  @IsNotEmpty()
  name: string;
  @Field(() => String)
  @IsMongoId()
  @IsNotEmpty()
  readonly brand: string;
}
