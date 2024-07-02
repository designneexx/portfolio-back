import { IsBoolean, IsString } from 'class-validator';

export class CreateKnowledgeOfLanguageDto {
  @IsString()
  language: string;

  @IsString()
  languageDegree: string;

  @IsBoolean()
  isNativeLanugage: boolean;
}
