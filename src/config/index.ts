import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    name: process.env.DB_NAME || 'market',
    user: process.env.DB_USER || 'market_user',
    password: process.env.DB_PASSWORD || 'market_password',
    dialect: (process.env.DB_DIALECT || 'mysql') as 'mysql',
  }
};
