import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { Duration } from '../schemas/duration.schema';

export class CreateJobExperienceDto {
  @IsString()
  jobTitle: string | null;

  @IsString()
  companyName: string | null;

  @IsString()
  jobDescription: string | null;

  @ValidateNested()
  @Type(() => Duration)
  jobDuration: Duration;

  @IsString()
  companyLocation: string | null;
}
