import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { FormDataRequest } from 'nestjs-form-data';
import { CreatePortfolioResumeDto } from './dto/CreatePortfolioResume.dto';
import { portfolioGeneratorService } from '../externalServices';
import { PortfolioService } from './portfolio.service';
import { AccessTokenGuard } from '../common/guards/accessToken.guard';
import FormData from 'form-data';
import { UsersService } from '../users/users.service';
import { getPortfolioModel } from './utils/getPortfolioModel';

@Controller('portfolio')
export class PortfolioController {
  constructor(
    private readonly portfolioService: PortfolioService,
    private readonly usersService: UsersService,
  ) {}

  @Delete('resume/:resumeId')
  async deleteResume(@Param('resumeId') resumeId: string) {
    await this.portfolioService.delete(resumeId);
  }

  @Get('resume-by-user-id/:userId')
  async getResumeByUserId(@Param('userId') userId: string) {
    const model = await this.portfolioService.getByUserId(userId);

    return model;
  }

  @Get('resume/:resumeId')
  async getResume(@Param('resumeId') resumeId: string) {
    const model = await this.portfolioService.getById(resumeId);

    if (!model) {
      throw new NotFoundException('Резюме не найдено');
    }

    return model;
  }

  @UseGuards(AccessTokenGuard)
  @Post('resume')
  @FormDataRequest()
  async uploadResume(
    @Body() portfolioDto: CreatePortfolioResumeDto,
    @Request() req,
  ) {
    const formData = new FormData();
    const { resume } = portfolioDto;
    const user = await this.usersService.findById(req.user.id);

    formData.append('resume', resume.buffer, resume.originalName);

    const { portfolio, avatarPath, resumeUrl } =
      await portfolioGeneratorService.generate(formData);
    const data = await this.portfolioService.create(
      { ...portfolio, avatarPath, resumeUrl },
      user,
    );

    return getPortfolioModel(data);
  }
}
