import { CreateJobExperienceDto } from './CreateJobExperience.dto';
import { CreateProjectExperienceDto } from './CreateProjectExperience.dto';
import { CreateEducationDto } from './CreateEducation.dto';
import { CreateSkillDto } from './CreateSkill.dto';
import { CreateKnowledgeOfLanguageDto } from './CreateKnowledgeOfLanguage.dto';
import { CreateTestsOfExamsOrTrainingDto } from './CreateTestsOfExamsOrTraining.dto';
export declare class CreatePortfolioDto {
    firstName: string | null;
    city: string | null;
    surname: string | null;
    patronymic: string | null;
    fullName: string | null;
    email: string | null;
    phone: string | null;
    aboutMe: string | null;
    citizenship: string | null;
    personLocation: string | null;
    mainDegreeOfQualification: string | null;
    avatarPath: string;
    resumeUrl: string;
    jobExperienceList: CreateJobExperienceDto[];
    projectExperienceList: CreateProjectExperienceDto[];
    educationList: CreateEducationDto[];
    skillList: CreateSkillDto[];
    knowledgeOfLanguageList: CreateKnowledgeOfLanguageDto[];
    testsOfExamsOrTraining: CreateTestsOfExamsOrTrainingDto[];
}
