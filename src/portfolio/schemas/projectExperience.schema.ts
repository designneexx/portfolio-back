import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ProjectExperience {
  @Prop({ default: null })
  projectName: string;

  @Prop({ default: null })
  projectDescription: string;
}

export type ProjectExperienceDocument = ProjectExperience & Document;

export const ProjectExperienceSchema =
  SchemaFactory.createForClass(ProjectExperience);
