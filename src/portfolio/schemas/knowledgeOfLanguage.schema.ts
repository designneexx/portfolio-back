import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class KnowledgeOfLanuage {
  @Prop({ default: null })
  language: string;

  @Prop({ default: false })
  isNativeLanugage: boolean;

  @Prop({ default: null })
  languageDegree: string;
}

export type KnowledgeOfLanuageDocument = KnowledgeOfLanuage & Document;

export const KnowledgeOfLanuageSchema =
  SchemaFactory.createForClass(KnowledgeOfLanuage);
