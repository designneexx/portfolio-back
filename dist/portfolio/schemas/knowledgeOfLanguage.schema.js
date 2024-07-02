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
exports.KnowledgeOfLanuageSchema = exports.KnowledgeOfLanuage = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let KnowledgeOfLanuage = class KnowledgeOfLanuage {
};
exports.KnowledgeOfLanuage = KnowledgeOfLanuage;
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], KnowledgeOfLanuage.prototype, "language", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], KnowledgeOfLanuage.prototype, "isNativeLanugage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], KnowledgeOfLanuage.prototype, "languageDegree", void 0);
exports.KnowledgeOfLanuage = KnowledgeOfLanuage = __decorate([
    (0, mongoose_1.Schema)()
], KnowledgeOfLanuage);
exports.KnowledgeOfLanuageSchema = mongoose_1.SchemaFactory.createForClass(KnowledgeOfLanuage);
//# sourceMappingURL=knowledgeOfLanguage.schema.js.map