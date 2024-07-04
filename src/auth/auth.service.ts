import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user-email.dto';
import { UsersService } from '../users/users.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthDto } from './dto/auth.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';
import generator from 'generate-password';
import { UserEntity } from '../users/entity/user.entity';

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private readonly mailerService: MailerService,
  ) {}

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

  async sendConfirmMail(user: UserEntity, tokens: Tokens, cb: () => void) {
    const baseUrl = this.configService.get('HOST_FRONTEND_BASE_URL');

    return await this.mailerService
      .sendMail({
        to: user.email,
        subject: 'Подтверждение регистрации',
        template: join(process.cwd(), 'src/templates', 'confirmReg'),
        context: {
          email: user.email,
          password: user.password,
          confirmUrl: `${baseUrl}?accessToken=${tokens.accessToken}&refreshToken=${tokens.refreshToken}`,
        },
      })
      .catch((e) => {
        cb();
        throw new HttpException(
          `Ошибка работы почты: ${JSON.stringify(e)}`,
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      });
  }

  async signUp(createUserDto: CreateUserDto): Promise<any> {
    // Check if user exists
    const userExists = await this.usersService.findByEmail(createUserDto.email);
    if (userExists) {
      throw new BadRequestException('Пользователь уже существует');
    }

    // Hash password
    const password = generator.generate({
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

    await this.sendConfirmMail(
      {
        password,
        email: newUser.email,
      },
      tokens,
      () => {
        this.usersService.delete(newUser.id);
      },
    );

    return tokens;
  }

  async signIn(data: AuthDto) {
    const user = await this.usersService.findByEmail(data.email);

    if (!user) throw new BadRequestException('Пользователь не найден');

    const passwordMatches = await argon2.verify(user.password, data.password);

    if (!passwordMatches)
      throw new BadRequestException('Некорректный логин или пароль');

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

  async logout(userId: string) {
    this.usersService.update(userId, { refreshToken: null });
  }

  async refreshTokens(userId: string, refreshToken: string) {
    const user = await this.usersService.findById(userId);

    if (!user || !user.refreshToken)
      throw new ForbiddenException('Нет доступа');

    const refreshTokenMatches = await argon2.verify(
      user.refreshToken,
      refreshToken,
    );

    if (!refreshTokenMatches) throw new ForbiddenException('Нет доступа');

    const tokens = await this.getTokens(user.id, {
      email: user.email,
    });

    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  hashData(data: string) {
    return argon2.hash(data);
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    const hashedRefreshToken = await this.hashData(refreshToken);
    await this.usersService.update(userId, {
      refreshToken: hashedRefreshToken,
    });
  }

  async getTokens(id: string, { email }: Omit<UserEntity, 'password'>) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          id,
          email,
        },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: '1d',
        },
      ),
      this.jwtService.signAsync(
        {
          id,
          email,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
