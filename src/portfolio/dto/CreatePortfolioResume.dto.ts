import {
  HasMimeType,
  IsFile,
  MaxFileSize,
  MemoryStoredFile,
} from 'nestjs-form-data';

export class CreatePortfolioResumeDto {
  @IsFile()
  @MaxFileSize(1e7)
  @HasMimeType([
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/msword',
  ])
  resume: MemoryStoredFile;
}
