import * as pg from 'pg';
import { Options, ClientFn } from './types';
import { Value } from '../types/value';

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
      const res: Promise<T | Error> = fn(client);
      client.release();

      return res;
    } catch (ex) {
      client.release();
      return Promise.reject(ex);
    }
  }

  async createValue(v: Value): Promise<[Error, string]> {
    const r: string|Error = await this.do<string>((c: pg.PoolClient): Promise<String|Error> => {
        return c.query(`
          INSERT INTO user (email, first_name, last_name, password) = ($1, $2, $3, $3)
          RETURNING ID;
        `, [v.Email, v.FirstName, v.LastName, v.Password])
        .then((result: pg.QueryResult) => result.rows[0]);
    });

    return [undefined, r.toString()];
  }

  async getValue(s: string): Promise<[Error, string]> {
    return [undefined, ''];
  }
}
