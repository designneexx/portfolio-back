import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Duration } from './duration.schema';

@Schema()
export class Education {
  @Prop({ default: null })
  degreeOfEducation: string;

  @Prop({ default: null })
  educationalInstitution: string;

  @Prop({ type: Duration })
  educationDuration: Duration;

  @Prop({ default: null })
  educationFaculty: string;

  @Prop({ default: null })
  educationDepartment: string;
}

export type EducationDocument = Education & Document;

export const EducationSchema = SchemaFactory.createForClass(Education);
