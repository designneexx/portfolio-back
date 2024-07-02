import { IsString } from 'class-validator';

export class CreateDurationDto {
  @IsString()
  start: string;

  @IsString()
  end: string;
}
