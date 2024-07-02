"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioModule = void 0;
const common_1 = require("@nestjs/common");
const portfolio_service_1 = require("./portfolio.service");
const portfolio_controller_1 = require("./portfolio.controller");
const mongoose_1 = require("@nestjs/mongoose");
const portfolio_schema_1 = require("./schemas/portfolio.schema");
const nestjs_form_data_1 = require("nestjs-form-data");
const users_service_1 = require("../users/users.service");
const users_module_1 = require("../users/users.module");
const user_schema_1 = require("../users/schemas/user.schema");
let PortfolioModule = class PortfolioModule {
};
exports.PortfolioModule = PortfolioModule;
exports.PortfolioModule = PortfolioModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: portfolio_schema_1.Portfolio.name, schema: portfolio_schema_1.PortfolioSchema },
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
            ]),
            nestjs_form_data_1.NestjsFormDataModule.config({ storage: nestjs_form_data_1.MemoryStoredFile }),
            users_module_1.UsersModule,
        ],
        providers: [portfolio_service_1.PortfolioService, users_service_1.UsersService],
        controllers: [portfolio_controller_1.PortfolioController],
        exports: [portfolio_service_1.PortfolioService, users_service_1.UsersService],
    })
], PortfolioModule);
//# sourceMappingURL=portfolio.module.js.map