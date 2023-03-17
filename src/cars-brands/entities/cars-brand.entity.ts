import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class CarsBrand extends Document {
  @Field(() => String)
  _id: string;
  @Field(() => String)
  @Prop({ required: true, unique: true })
  name: string;
}

export const CarsBrandSchema = SchemaFactory.createForClass(CarsBrand);
