import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  toJSON: {
    transform: (doc, {_id, __v, ...rest}, options) => {
      return rest;
    }
  }
})
export class User extends Document {
  @Prop()
  name: string;

  @Prop({
    required: true,
    unique: true,

  })
  email: string;
}


export const UserSchema = SchemaFactory.createForClass(User);
