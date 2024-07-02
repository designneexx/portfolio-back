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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioSchema = exports.Portfolio = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importStar(require("mongoose"));
const workExperience_schema_1 = require("./workExperience.schema");
const projectExperience_schema_1 = require("./projectExperience.schema");
const education_schema_1 = require("./education.schema");
const skill_schema_1 = require("./skill.schema");
const user_schema_1 = require("../../users/schemas/user.schema");
const class_transformer_1 = require("class-transformer");
const knowledgeOfLanguage_schema_1 = require("./knowledgeOfLanguage.schema");
const testsOfExamsOrTraining_schema_1 = require("./testsOfExamsOrTraining.schema");
let Portfolio = class Portfolio {
};
exports.Portfolio = Portfolio;
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Portfolio.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Portfolio.prototype, "profession", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Portfolio.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Portfolio.prototype, "surname", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Portfolio.prototype, "patronymic", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Portfolio.prototype, "fullName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Portfolio.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Portfolio.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Portfolio.prototype, "aboutMe", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Portfolio.prototype, "citizenship", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Portfolio.prototype, "personLocation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Portfolio.prototype, "mainDegreeOfQualification", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [workExperience_schema_1.JobExperience], default: [] }),
    __metadata("design:type", Array)
], Portfolio.prototype, "jobExperienceList", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [projectExperience_schema_1.ProjectExperience], default: [] }),
    __metadata("design:type", Array)
], Portfolio.prototype, "projectExperienceList", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [education_schema_1.Education], default: [] }),
    __metadata("design:type", Array)
], Portfolio.prototype, "educationList", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [skill_schema_1.Skill], default: [] }),
    __metadata("design:type", Array)
], Portfolio.prototype, "skillList", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [knowledgeOfLanguage_schema_1.KnowledgeOfLanuage], default: [] }),
    __metadata("design:type", Array)
], Portfolio.prototype, "knowledgeOfLanguageList", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [testsOfExamsOrTraining_schema_1.TestsOfExamsOrTraining], default: [] }),
    __metadata("design:type", Array)
], Portfolio.prototype, "testsOfExamsOrTraining", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Portfolio.prototype, "avatarPath", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Portfolio.prototype, "resumeUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: user_schema_1.User.name,
        default: null,
    }),
    (0, class_transformer_1.Type)(() => mongoose_2.Types.ObjectId),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Portfolio.prototype, "userId", void 0);
exports.Portfolio = Portfolio = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Portfolio);
exports.PortfolioSchema = mongoose_1.SchemaFactory.createForClass(Portfolio);
//# sourceMappingURL=portfolio.schema.js.map