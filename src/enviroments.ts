import 'dotenv/config';

export const enviroments = {
  jwtAccessToken: process.env.JWT_ACCESS_SECRET,
  jwtRefreshToken: process.env.JWT_REFRESH_SECRET,
  mongoUri: process.env.MONGO_URI,
  port: process.env.PORT,
  portfolioGeneratorServiceBaseUrl:
    process.env.PORTFOLIO_GENERATOR_SERVICE_BASE_URL || '',
  caCert: process.env.CA_CERT_URL || '',
  dbUser: process.env.DB_USER || '',
  dbPassword: process.env.DB_PASSWORD || '',
  dbHostUrl: process.env.DB_HOST_URL || '',
  dbRs: process.env.DB_RS || '',
  dbName: process.env.DB_NAME || '',
  host: process.env.HOST || '',
};
