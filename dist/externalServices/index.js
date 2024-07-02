"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.portfolioGeneratorService = void 0;
const axios_1 = __importDefault(require("axios"));
const enviroments_1 = require("../enviroments");
const instance = axios_1.default.create({
    baseURL: enviroments_1.enviroments.portfolioGeneratorServiceBaseUrl,
});
exports.portfolioGeneratorService = {
    async generate(formData, config) {
        const { data } = await instance.post('/generate-portfolio', formData, {
            headers: {
                ...formData.getHeaders(),
            },
            ...config,
        });
        return data;
    },
};
//# sourceMappingURL=index.js.map