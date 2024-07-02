import { IsString } from 'class-validator';

export class CreateSkillDto {
  @IsString()
  skillName: string;

  @IsString()
  skillDescription: string;

  @IsString()
  skillLevel: string;
}
