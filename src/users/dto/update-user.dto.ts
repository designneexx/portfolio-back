import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user-email.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  refreshToken?: string;
}
