import * as pg from 'pg';
import { Options, ClientFn } from './types';

export class Postgres {
  conn: pg.Pool;

  constructor(op: Options) {
    const conf: pg.PoolConfig = {
      database: op.database,
      user: op.user,
      password: op.password,
      port: op.port,
      host: op.host,
    };

    this.conn = new pg.Pool(conf);
  }

  async Do<T>(fn: ClientFn): Promise<[Error, T]> {
    const client = await this.conn.connect();

    try {
      const res: Promise<[Error, T]> = fn(client);
      client.release();

      return res;
    } catch (ex) {
      client.release();
      return Promise.reject(ex);
    }
  }
}
