import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { Duration } from '../schemas/duration.schema';

export class CreateEducationDto {
  @IsString()
  degreeOfEducation: string;

  @IsString()
  educationalInstitution: string;

  @ValidateNested()
  @Type(() => Duration)
  educationDuration: Duration;

  @IsString()
  educationFaculty: string;

  @IsString()
  educationDepartment: string;
}
