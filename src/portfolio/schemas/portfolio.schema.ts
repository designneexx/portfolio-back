import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { JobExperience } from './workExperience.schema';
import { ProjectExperience } from './projectExperience.schema';
import { Education } from './education.schema';
import { Skill } from './skill.schema';
import { User } from 'src/users/schemas/user.schema';
import { Type } from 'class-transformer';
import { KnowledgeOfLanuage } from './knowledgeOfLanguage.schema';
import { TestsOfExamsOrTraining } from './testsOfExamsOrTraining.schema';

@Schema({ timestamps: true })
export class Portfolio {
  @Prop({ default: null })
  firstName: string;

  @Prop({ default: null })
  profession: string;

  @Prop({ default: null })
  city: string;

  @Prop({ default: null })
  surname: string;

  @Prop({ default: null })
  patronymic: string;

  @Prop({ default: null })
  fullName: string;

  @Prop({ default: null })
  email: string;

  @Prop({ default: null })
  phone: string;

  @Prop({ default: null })
  aboutMe: string;

  @Prop({ default: null })
  citizenship: string;

  @Prop({ default: null })
  personLocation: string;

  @Prop({ default: null })
  mainDegreeOfQualification: string;

  @Prop({ type: [JobExperience], default: [] })
  jobExperienceList: JobExperience[];

  @Prop({ type: [ProjectExperience], default: [] })
  projectExperienceList: ProjectExperience[];

  @Prop({ type: [Education], default: [] })
  educationList: Education[];

  @Prop({ type: [Skill], default: [] })
  skillList: Skill[];

  @Prop({ type: [KnowledgeOfLanuage], default: [] })
  knowledgeOfLanguageList: KnowledgeOfLanuage[];

  @Prop({ type: [TestsOfExamsOrTraining], default: [] })
  testsOfExamsOrTraining: TestsOfExamsOrTraining[];

  @Prop({ default: null })
  avatarPath: string;

  @Prop({ default: null })
  resumeUrl: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    default: null,
  })
  @Type(() => Types.ObjectId)
  userId: Types.ObjectId;
}

export type PortfolioDocument = Portfolio & Document;

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);
