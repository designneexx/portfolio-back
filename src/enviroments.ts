import 'dotenv/config';

export const enviroments = {
  jwtAccessToken: process.env.JWT_ACCESS_SECRET,
  jwtRefreshToken: process.env.JWT_REFRESH_SECRET,
  mongoUri: process.env.MONGO_URI,
  port: process.env.PORT,
  portfolioGeneratorServiceBaseUrl:
    process.env.PORTFOLIO_GENERATOR_SERVICE_BASE_URL || '',
};