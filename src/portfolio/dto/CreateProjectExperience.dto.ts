import { IsString } from 'class-validator';

export class CreateProjectExperienceDto {
  @IsString()
  projectName: string | null;

  @IsString()
  projectDescription: string | null;
}
