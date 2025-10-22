import 'reflect-metadata';
import app from './app';
import { config } from './config';
import { testConnection } from './config/database';

const startServer = async () => {
  try {
    await testConnection();
    
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
