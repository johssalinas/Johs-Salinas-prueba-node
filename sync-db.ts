import { sequelize } from './src/config/database';

async function syncDatabase() {
  try {
    console.log('🔄 Sincronizando base de datos...');
    await sequelize.sync({ force: true });
    console.log('✅ Base de datos sincronizada correctamente!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al sincronizar:', error);
    process.exit(1);
  }
}

syncDatabase();
