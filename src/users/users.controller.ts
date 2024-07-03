import {
  Controller,
  UseGuards,
  Get,
  Request,
  NotFoundException,
  Post,
  Body,
  HttpException,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AccessTokenGuard } from '../common/guards/accessToken.guard';
import { MailerService } from '@nestjs-modules/mailer';
import { SendMessageDto } from './dto/send-message.dto';
import { join } from 'path';
import { HttpStatusCode } from 'axios';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly mailerService: MailerService,
  ) {}

  @UseGuards(AccessTokenGuard)
  @Get('user')
  async getUser(@Request() req) {
    const user = await this.usersService.findById(req.user.id);

    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    return {
      email: user.email,
      id: user.id,
    };
  }

  @Post('send-message/:userId')
  async sendMessage(
    @Param('userId') userId: string,
    @Body() data: SendMessageDto,
  ) {
    const user = this.usersService.findById(userId);

    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    await this.mailerService
      .sendMail({
        to: data.senderEmail,
        subject: data.subject,
        template: join(process.cwd(), 'src/templates', 'contactReg'),
        context: {
          email: data.senderEmail,
          text: data.text,
          fullName: data.fullName,
        },
      })
      .catch((e) => {
        console.log(e);
        throw new HttpException(
          `Ошибка работы почты: ${JSON.stringify(e)}`,
          HttpStatusCode.UnprocessableEntity,
        );
      });
  }
}
