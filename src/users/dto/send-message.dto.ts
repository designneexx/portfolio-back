import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SendMessageDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(1, { message: 'Минимум 1 символ' })
  fullName: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  senderEmail: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1, { message: 'Минимум 1 символ' })
  subject: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1, { message: 'Минимум 1 символ' })
  text: string;
}
