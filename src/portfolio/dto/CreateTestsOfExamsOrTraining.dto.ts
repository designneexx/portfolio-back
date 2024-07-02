import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { Duration } from '../schemas/duration.schema';

export class CreateTestsOfExamsOrTrainingDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @ValidateNested()
  @Type(() => Duration)
  duration: Duration;
}
