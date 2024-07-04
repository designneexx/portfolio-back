"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const argon2 = __importStar(require("argon2"));
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const mailer_1 = require("@nestjs-modules/mailer");
const path_1 = require("path");
const generate_password_1 = __importDefault(require("generate-password"));
let AuthService = class AuthService {
    constructor(usersService, jwtService, configService, mailerService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.mailerService = mailerService;
    }
    getMFConfig() {
        const feCreatorURL = this.configService.get('FE_CREATOR_URL');
        const feCreatorScope = this.configService.get('FE_CREATOR_SCOPE');
        const feCreatorModule = this.configService.get('FE_CREATOR_MODULE');
        const fePortfolioURL = this.configService.get('FE_PORTFOLIO_URL');
        const fePortfolioScope = this.configService.get('FE_PORTFOLIO_SCOPE');
        const fePortfolioModule = this.configService.get('FE_PORTFOLIO_MODULE');
        return {
            feCreator: {
                url: feCreatorURL,
                scope: feCreatorScope,
                module: feCreatorModule,
            },
            fePortfolio: {
                url: fePortfolioURL,
                scope: fePortfolioScope,
                module: fePortfolioModule,
            },
        };
    }
    async sendConfirmMail(user, tokens, cb) {
        const baseUrl = this.configService.get('HOST_FRONTEND_BASE_URL');
        return await this.mailerService
            .sendMail({
            to: user.email,
            subject: 'Подтверждение регистрации',
            template: (0, path_1.join)(process.cwd(), 'src/templates', 'confirmReg'),
            context: {
                email: user.email,
                password: user.password,
                confirmUrl: `${baseUrl}?accessToken=${tokens.accessToken}&refreshToken=${tokens.refreshToken}`,
            },
        })
            .catch((e) => {
            cb();
            throw new common_1.HttpException(`Ошибка работы почты: ${JSON.stringify(e)}`, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        });
    }
    async signUp(createUserDto) {
        const userExists = await this.usersService.findByEmail(createUserDto.email);
        if (userExists) {
            throw new common_1.BadRequestException('Пользователь уже существует');
        }
        const password = generate_password_1.default.generate({
            length: 10,
            numbers: true,
        });
        const hash = await this.hashData(password);
        const newUser = await this.usersService.create({
            ...createUserDto,
            password: hash,
        });
        const tokens = await this.getTokens(newUser._id, {
            email: newUser.email,
        });
        await this.updateRefreshToken(newUser._id, tokens.refreshToken);
        await this.sendConfirmMail({
            password,
            email: newUser.email,
        }, tokens, () => {
            this.usersService.delete(newUser.id);
        });
        return tokens;
    }
    async signIn(data) {
        const user = await this.usersService.findByEmail(data.email);
        if (!user)
            throw new common_1.BadRequestException('Пользователь не найден');
        const passwordMatches = await argon2.verify(user.password, data.password);
        if (!passwordMatches)
            throw new common_1.BadRequestException('Некорректный логин или пароль');
        const tokens = await this.getTokens(user._id, {
            email: user.email,
        });
        await this.updateRefreshToken(user._id, tokens.refreshToken);
        return {
            tokens,
            user: {
                id: user.id,
                email: user.email,
            },
        };
    }
    async logout(userId) {
        this.usersService.update(userId, { refreshToken: null });
    }
    async refreshTokens(userId, refreshToken) {
        const user = await this.usersService.findById(userId);
        if (!user || !user.refreshToken)
            throw new common_1.ForbiddenException('Нет доступа');
        const refreshTokenMatches = await argon2.verify(user.refreshToken, refreshToken);
        if (!refreshTokenMatches)
            throw new common_1.ForbiddenException('Нет доступа');
        const tokens = await this.getTokens(user.id, {
            email: user.email,
        });
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }
    hashData(data) {
        return argon2.hash(data);
    }
    async updateRefreshToken(userId, refreshToken) {
        const hashedRefreshToken = await this.hashData(refreshToken);
        await this.usersService.update(userId, {
            refreshToken: hashedRefreshToken,
        });
    }
    async getTokens(id, { email }) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync({
                id,
                email,
            }, {
                secret: this.configService.get('JWT_ACCESS_SECRET'),
                expiresIn: '1d',
            }),
            this.jwtService.signAsync({
                id,
                email,
            }, {
                secret: this.configService.get('JWT_REFRESH_SECRET'),
                expiresIn: '7d',
            }),
        ]);
        return {
            accessToken,
            refreshToken,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService,
        mailer_1.MailerService])
], AuthService);
//# sourceMappingURL=auth.service.js.map