import { CreateUserDto } from '../users/dto/create-user-email.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthDto } from './dto/auth.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { UserEntity } from '../users/entity/user.entity';
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    private readonly mailerService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService, mailerService: MailerService);
    getMFConfig(): {
        feCreator: {
            url: any;
            scope: any;
            module: any;
        };
        fePortfolio: {
            url: any;
            scope: any;
            module: any;
        };
    };
    sendConfirmMail(user: UserEntity, accessToken: string, refreshToken: string): Promise<any>;
    signUp(createUserDto: CreateUserDto): Promise<any>;
    signIn(data: AuthDto): Promise<{
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        user: {
            id: any;
            email: string;
        };
    }>;
    logout(userId: string): Promise<void>;
    refreshTokens(userId: string, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    hashData(data: string): Promise<string>;
    updateRefreshToken(userId: string, refreshToken: string): Promise<void>;
    getTokens(id: string, { email }: Omit<UserEntity, 'password'>): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
