import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Portfolio, PortfolioDocument } from './schemas/portfolio.schema';
import { CreatePortfolioDto } from './dto/CreatePortfolio.dto';
import { UserDocument } from '../users/schemas/user.schema';
import { getPortfolioModel } from './utils/getPortfolioModel';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel(Portfolio.name)
    private portfolioModel: Model<PortfolioDocument>,
  ) {}

  async get(user: UserDocument) {
    const model = await this.portfolioModel.findOne({ userId: user.id });

    return model;
  }

  async getById(resumeId: string) {
    const model = await this.portfolioModel.findById(resumeId);

    if (!model) return null;

    return getPortfolioModel(model);
  }

  async create(
    createPortfolioDto: CreatePortfolioDto,
    user: UserDocument,
  ): Promise<PortfolioDocument> {
    const createdPortfolio = new this.portfolioModel({
      ...createPortfolioDto,
      userId: user.id,
    });

    return createdPortfolio.save();
  }
}
