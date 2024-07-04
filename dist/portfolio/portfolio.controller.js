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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_form_data_1 = require("nestjs-form-data");
const CreatePortfolioResume_dto_1 = require("./dto/CreatePortfolioResume.dto");
const externalServices_1 = require("../externalServices");
const portfolio_service_1 = require("./portfolio.service");
const accessToken_guard_1 = require("../common/guards/accessToken.guard");
const form_data_1 = __importDefault(require("form-data"));
const users_service_1 = require("../users/users.service");
const getPortfolioModel_1 = require("./utils/getPortfolioModel");
let PortfolioController = class PortfolioController {
    constructor(portfolioService, usersService) {
        this.portfolioService = portfolioService;
        this.usersService = usersService;
    }
    async deleteResume(resumeId) {
        await this.portfolioService.delete(resumeId);
    }
    async getResumeByUserId(userId) {
        const model = await this.portfolioService.getByUserId(userId);
        return model;
    }
    async getResume(resumeId) {
        const model = await this.portfolioService.getById(resumeId);
        if (!model) {
            throw new common_1.NotFoundException('Резюме не найдено');
        }
        return model;
    }
    async uploadResume(portfolioDto, req) {
        const formData = new form_data_1.default();
        const { resume } = portfolioDto;
        const user = await this.usersService.findById(req.user.id);
        formData.append('resume', resume.buffer, resume.originalName);
        const { portfolio, avatarPath, resumeUrl } = await externalServices_1.portfolioGeneratorService.generate(formData);
        const data = await this.portfolioService.create({ ...portfolio, avatarPath, resumeUrl }, user);
        return (0, getPortfolioModel_1.getPortfolioModel)(data);
    }
};
exports.PortfolioController = PortfolioController;
__decorate([
    (0, common_1.Delete)('resume/:resumeId'),
    __param(0, (0, common_1.Param)('resumeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PortfolioController.prototype, "deleteResume", null);
__decorate([
    (0, common_1.Get)('resume-by-user-id/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PortfolioController.prototype, "getResumeByUserId", null);
__decorate([
    (0, common_1.Get)('resume/:resumeId'),
    __param(0, (0, common_1.Param)('resumeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PortfolioController.prototype, "getResume", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Post)('resume'),
    (0, nestjs_form_data_1.FormDataRequest)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePortfolioResume_dto_1.CreatePortfolioResumeDto, Object]),
    __metadata("design:returntype", Promise)
], PortfolioController.prototype, "uploadResume", null);
exports.PortfolioController = PortfolioController = __decorate([
    (0, common_1.Controller)('portfolio'),
    __metadata("design:paramtypes", [portfolio_service_1.PortfolioService,
        users_service_1.UsersService])
], PortfolioController);
//# sourceMappingURL=portfolio.controller.js.map