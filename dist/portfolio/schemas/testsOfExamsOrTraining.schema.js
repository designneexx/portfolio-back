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
exports.TestsOfExamsOrTrainingSchema = exports.TestsOfExamsOrTraining = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const duration_schema_1 = require("./duration.schema");
let TestsOfExamsOrTraining = class TestsOfExamsOrTraining {
};
exports.TestsOfExamsOrTraining = TestsOfExamsOrTraining;
__decorate([
    (0, mongoose_1.Prop)({ type: duration_schema_1.Duration }),
    __metadata("design:type", duration_schema_1.Duration)
], TestsOfExamsOrTraining.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], TestsOfExamsOrTraining.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], TestsOfExamsOrTraining.prototype, "description", void 0);
exports.TestsOfExamsOrTraining = TestsOfExamsOrTraining = __decorate([
    (0, mongoose_1.Schema)()
], TestsOfExamsOrTraining);
exports.TestsOfExamsOrTrainingSchema = mongoose_1.SchemaFactory.createForClass(TestsOfExamsOrTraining);
//# sourceMappingURL=testsOfExamsOrTraining.schema.js.map