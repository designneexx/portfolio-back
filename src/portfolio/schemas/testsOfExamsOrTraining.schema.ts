import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Duration } from './duration.schema';

@Schema()
export class TestsOfExamsOrTraining {
  @Prop({ type: Duration })
  duration: Duration;

  @Prop({ default: null })
  title: string;

  @Prop({ default: null })
  description: string;
}

export type TestsOfExamsOrTrainingDocument = TestsOfExamsOrTraining & Document;

export const TestsOfExamsOrTrainingSchema = SchemaFactory.createForClass(
  TestsOfExamsOrTraining,
);
