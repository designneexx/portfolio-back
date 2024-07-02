import { UsersService } from './users.service';
import { MailerService } from '@nestjs-modules/mailer';
import { SendMessageDto } from './dto/send-message.dto';
export declare class UsersController {
    private readonly usersService;
    private readonly mailerService;
    constructor(usersService: UsersService, mailerService: MailerService);
    getUser(req: any): Promise<{
        email: string;
        id: any;
    }>;
    sendMessage(userId: string, data: SendMessageDto): Promise<void>;
}
