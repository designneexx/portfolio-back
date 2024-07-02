import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Skill {
  @Prop({ default: null })
  skillName: string;

  @Prop({ default: null })
  skillDescription: string;

  @Prop({ default: null })
  skillLevel: string;
}

export type SkillDocument = Skill & Document;

export const SkillSchema = SchemaFactory.createForClass(Skill);
