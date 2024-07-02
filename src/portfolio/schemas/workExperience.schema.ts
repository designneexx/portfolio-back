import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Duration } from './duration.schema';

@Schema()
export class JobExperience {
  @Prop({ default: null })
  jobTitle: string;

  @Prop({ default: null })
  companyName: string;

  @Prop({ default: null })
  jobDescription: string;

  @Prop({ type: Duration })
  jobDuration: Duration;

  @Prop({ default: null })
  companyLocation: string;
}

export type JobExperienceDocument = JobExperience & Document;

export const JobExperienceSchema = SchemaFactory.createForClass(JobExperience);
