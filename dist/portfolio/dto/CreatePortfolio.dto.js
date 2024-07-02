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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePortfolioDto = void 0;
const class_validator_1 = require("class-validator");
const CreateJobExperience_dto_1 = require("./CreateJobExperience.dto");
const class_transformer_1 = require("class-transformer");
const CreateProjectExperience_dto_1 = require("./CreateProjectExperience.dto");
const CreateEducation_dto_1 = require("./CreateEducation.dto");
const CreateSkill_dto_1 = require("./CreateSkill.dto");
const CreateKnowledgeOfLanguage_dto_1 = require("./CreateKnowledgeOfLanguage.dto");
const CreateTestsOfExamsOrTraining_dto_1 = require("./CreateTestsOfExamsOrTraining.dto");
class CreatePortfolioDto {
}
exports.CreatePortfolioDto = CreatePortfolioDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePortfolioDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePortfolioDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePortfolioDto.prototype, "surname", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePortfolioDto.prototype, "patronymic", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePortfolioDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePortfolioDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePortfolioDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePortfolioDto.prototype, "aboutMe", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePortfolioDto.prototype, "citizenship", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePortfolioDto.prototype, "personLocation", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePortfolioDto.prototype, "mainDegreeOfQualification", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePortfolioDto.prototype, "avatarPath", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePortfolioDto.prototype, "resumeUrl", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateJobExperience_dto_1.CreateJobExperienceDto),
    __metadata("design:type", Array)
], CreatePortfolioDto.prototype, "jobExperienceList", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateProjectExperience_dto_1.CreateProjectExperienceDto),
    __metadata("design:type", Array)
], CreatePortfolioDto.prototype, "projectExperienceList", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateEducation_dto_1.CreateEducationDto),
    __metadata("design:type", Array)
], CreatePortfolioDto.prototype, "educationList", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateSkill_dto_1.CreateSkillDto),
    __metadata("design:type", Array)
], CreatePortfolioDto.prototype, "skillList", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateKnowledgeOfLanguage_dto_1.CreateKnowledgeOfLanguageDto),
    __metadata("design:type", Array)
], CreatePortfolioDto.prototype, "knowledgeOfLanguageList", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateTestsOfExamsOrTraining_dto_1.CreateTestsOfExamsOrTrainingDto),
    __metadata("design:type", Array)
], CreatePortfolioDto.prototype, "testsOfExamsOrTraining", void 0);
//# sourceMappingURL=CreatePortfolio.dto.js.map