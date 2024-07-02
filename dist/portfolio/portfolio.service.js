"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const portfolio_schema_1 = require("./schemas/portfolio.schema");
const getPortfolioModel_1 = require("./utils/getPortfolioModel");
let PortfolioService = class PortfolioService {
    constructor(portfolioModel) {
        this.portfolioModel = portfolioModel;
    }
    async get(user) {
        const model = await this.portfolioModel.findOne({ userId: user.id });
        return model;
    }
    async getById(resumeId) {
        const model = await this.portfolioModel.findById(resumeId);
        if (!model)
            return null;
        return (0, getPortfolioModel_1.getPortfolioModel)(model);
    }
    async create(createPortfolioDto, user) {
        const createdPortfolio = new this.portfolioModel({
            ...createPortfolioDto,
            userId: user.id,
        });
        return createdPortfolio.save();
    }
};
exports.PortfolioService = PortfolioService;
exports.PortfolioService = PortfolioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(portfolio_schema_1.Portfolio.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PortfolioService);
//# sourceMappingURL=portfolio.service.js.map