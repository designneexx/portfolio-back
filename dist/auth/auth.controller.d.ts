import { Request } from 'express';
import { CreateUserDto } from '../users/dto/create-user-email.dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    getConfig(): {
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
    signup(createUserDto: CreateUserDto): Promise<any>;
    signin(data: AuthDto): Promise<{
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        user: {
            id: any;
            email: string;
        };
    }>;
    logout(req: Request): void;
    refreshTokens(req: Request): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
