import { IsArray, IsString, ValidateNested } from 'class-validator';
import { CreateJobExperienceDto } from './CreateJobExperience.dto';
import { Type } from 'class-transformer';
import { CreateProjectExperienceDto } from './CreateProjectExperience.dto';
import { CreateEducationDto } from './CreateEducation.dto';
import { CreateSkillDto } from './CreateSkill.dto';
import { CreateKnowledgeOfLanguageDto } from './CreateKnowledgeOfLanguage.dto';
import { CreateTestsOfExamsOrTrainingDto } from './CreateTestsOfExamsOrTraining.dto';

export class CreatePortfolioDto {
  @IsString()
  firstName: string | null;

  @IsString()
  city: string | null;

  @IsString()
  surname: string | null;

  @IsString()
  patronymic: string | null;

  @IsString()
  fullName: string | null;

  @IsString()
  email: string | null;

  @IsString()
  phone: string | null;

  @IsString()
  aboutMe: string | null;

  @IsString()
  citizenship: string | null;

  @IsString()
  personLocation: string | null;

  @IsString()
  mainDegreeOfQualification: string | null;

  @IsString()
  avatarPath: string;

  @IsString()
  resumeUrl: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateJobExperienceDto)
  jobExperienceList: CreateJobExperienceDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProjectExperienceDto)
  projectExperienceList: CreateProjectExperienceDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateEducationDto)
  educationList: CreateEducationDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSkillDto)
  skillList: CreateSkillDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateKnowledgeOfLanguageDto)
  knowledgeOfLanguageList: CreateKnowledgeOfLanguageDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateTestsOfExamsOrTrainingDto)
  testsOfExamsOrTraining: CreateTestsOfExamsOrTrainingDto[];
}
