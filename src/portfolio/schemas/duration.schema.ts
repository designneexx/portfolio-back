import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Duration {
  @Prop({ default: null })
  start: string;

  @Prop({ default: null })
  end: string;
}

export type DurationDocument = Duration & Document;

export const DurationSchema = SchemaFactory.createForClass(Duration);
