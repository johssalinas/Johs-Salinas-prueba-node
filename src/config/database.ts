import { Sequelize } from 'sequelize-typescript';
import { config } from './index';

const sequelize = new Sequelize({
  database: config.database.name,
  username: config.database.user,
  password: config.database.password,
  host: config.database.host,
  port: config.database.port,
  dialect: config.database.dialect,
  logging: false,
  models: [__dirname + '/../models/**/*.ts', __dirname + '/../models/**/*.js'],
  modelMatch: (filename, member) => {
    return filename.substring(0, 1).toUpperCase() + filename.substring(1) === member;
  }
});

export const testConnection = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};

export { sequelize };
