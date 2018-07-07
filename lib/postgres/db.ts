import * as pg from 'pg';

let config: pg.PoolConfig = {};

try {
  config = {
    database: process.env.DB_NAME || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSSWORD || '',
    port: Number(process.env.DB_PORT) || 5432,
    host: process.env.DB_HOST || 'localhost',
  };
} catch (ex) {
  throw new Error(ex);
}

export default new pg.Pool(config);
