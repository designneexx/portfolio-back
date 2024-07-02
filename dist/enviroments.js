"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviroments = void 0;
require("dotenv/config");
exports.enviroments = {
    jwtAccessToken: process.env.JWT_ACCESS_SECRET,
    jwtRefreshToken: process.env.JWT_REFRESH_SECRET,
    mongoUri: process.env.MONGO_URI,
    port: process.env.PORT,
    portfolioGeneratorServiceBaseUrl: process.env.PORTFOLIO_GENERATOR_SERVICE_BASE_URL || '',
};
//# sourceMappingURL=enviroments.js.map