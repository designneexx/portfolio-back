/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import mongoose, { Document, Types } from 'mongoose';
import { JobExperience } from './workExperience.schema';
import { ProjectExperience } from './projectExperience.schema';
import { Education } from './education.schema';
import { Skill } from './skill.schema';
import { KnowledgeOfLanuage } from './knowledgeOfLanguage.schema';
import { TestsOfExamsOrTraining } from './testsOfExamsOrTraining.schema';
export declare class Portfolio {
    firstName: string;
    profession: string;
    city: string;
    surname: string;
    patronymic: string;
    fullName: string;
    email: string;
    phone: string;
    aboutMe: string;
    citizenship: string;
    personLocation: string;
    mainDegreeOfQualification: string;
    jobExperienceList: JobExperience[];
    projectExperienceList: ProjectExperience[];
    educationList: Education[];
    skillList: Skill[];
    knowledgeOfLanguageList: KnowledgeOfLanuage[];
    testsOfExamsOrTraining: TestsOfExamsOrTraining[];
    avatarPath: string;
    resumeUrl: string;
    userId: Types.ObjectId;
}
export type PortfolioDocument = Portfolio & Document;
export declare const PortfolioSchema: mongoose.Schema<Portfolio, mongoose.Model<Portfolio, any, any, any, mongoose.Document<unknown, any, Portfolio> & Portfolio & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Portfolio, mongoose.Document<unknown, {}, mongoose.FlatRecord<Portfolio>> & mongoose.FlatRecord<Portfolio> & {
    _id: Types.ObjectId;
}>;
