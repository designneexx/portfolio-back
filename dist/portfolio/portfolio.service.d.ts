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
import { Model } from 'mongoose';
import { Portfolio, PortfolioDocument } from './schemas/portfolio.schema';
import { CreatePortfolioDto } from './dto/CreatePortfolio.dto';
import { UserDocument } from '../users/schemas/user.schema';
export declare class PortfolioService {
    private portfolioModel;
    constructor(portfolioModel: Model<PortfolioDocument>);
    get(user: UserDocument): Promise<import("mongoose").Document<unknown, {}, PortfolioDocument> & Portfolio & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getById(resumeId: string): Promise<{
        createdAt: any;
        id: any;
        userId: import("mongoose").Types.ObjectId;
        aboutMe: string;
        resumeUrl: string;
        avatarPath: string;
        firstName: string;
        surname: string;
        patronymic: string;
        fullName: string;
        mainDegreeOfQualification: string;
        profession: string;
        city: string;
        citizenship: string;
        phone: string;
        email: string;
        personLocation: string;
        educationList: {
            degreeOfEducation: string;
            educationalInstitution: string;
            educationDepartment: string;
            educationDuration: {
                start: string;
                end: string;
            };
            educationFaculty: string;
            id: any;
        }[];
        skillList: {
            id: any;
            skillDescription: string;
            skillLevel: string;
            skillName: string;
        }[];
        projectExperienceList: {
            id: any;
            projectDescription: string;
            projectName: string;
        }[];
        jobExperienceList: {
            companyLocation: string;
            companyName: string;
            id: any;
            jobDescription: string;
            jobDuration: {
                start: string;
                end: string;
            };
            jobTitle: string;
        }[];
        knowledgeOfLanguageList: {
            id: any;
            isNativeLanguage: boolean;
            language: string;
            languageDegree: string;
        }[];
        testsOfExamsOrTraining: {
            description: string;
            duration: {
                start: string;
                end: string;
            };
            id: any;
            title: string;
        }[];
    }>;
    create(createPortfolioDto: CreatePortfolioDto, user: UserDocument): Promise<PortfolioDocument>;
}
