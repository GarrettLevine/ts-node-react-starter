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

  async do<T>(fn: ClientFn): Promise<T | Error> {
    const client = await this.conn.connect();

    try {
      const res = fn(client);
      client.release();

      return res;
    } catch (ex) {
      client.release();
      return Promise.reject(ex);
    }
  }

  createValue(s: string): string {
    return '';
  }

  getValue(s: string): string {
    return '';
  }
}
