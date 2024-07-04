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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const accessToken_guard_1 = require("../common/guards/accessToken.guard");
const mailer_1 = require("@nestjs-modules/mailer");
const send_message_dto_1 = require("./dto/send-message.dto");
const path_1 = require("path");
const axios_1 = require("axios");
let UsersController = class UsersController {
    constructor(usersService, mailerService) {
        this.usersService = usersService;
        this.mailerService = mailerService;
    }
    async getUser(req) {
        const user = await this.usersService.findById(req.user.id);
        if (!user) {
            throw new common_1.NotFoundException('Пользователь не найден');
        }
        return {
            email: user.email,
            id: user.id,
        };
    }
    async sendMessage(userId, data) {
        const user = await this.usersService.findById(userId);
        if (!user) {
            throw new common_1.NotFoundException('Пользователь не найден');
        }
        await this.mailerService
            .sendMail({
            to: user.email,
            subject: data.subject,
            template: (0, path_1.join)(__dirname, '../templates', 'contactReg.ejs'),
            context: {
                email: data.senderEmail,
                text: data.text,
                fullName: data.fullName,
            },
        })
            .catch((e) => {
            console.log(e);
            throw new common_1.HttpException(`Ошибка работы почты: ${JSON.stringify(e)}`, axios_1.HttpStatusCode.UnprocessableEntity);
        });
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Get)('user'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)('send-message/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, send_message_dto_1.SendMessageDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "sendMessage", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        mailer_1.MailerService])
], UsersController);
//# sourceMappingURL=users.controller.js.map