import { registerAs } from '@nestjs/config';

export const environments = {
  dev: '.env',
  prod: '.prod.env',
};

export default registerAs('config', () => ({
  mongo: {
    connection: process.env.MONGODB_CONNECTION,
    host: process.env.MONGODB_HOST,
    port: process.env.MONGODB_PORT,
    databaseName: process.env.MONGODB_DBNAME,
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASS,
  },
}));
