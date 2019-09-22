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

  async do<T>(fn: ClientFn): Promise<[Error, T]> {
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

  createValue = async (v: Value): Promise<[Error, string]> => {
    type idType = {
      id: string;
    };

    try {
      const [err, res ] = await this.do<idType>(async <idType>(c: pg.PoolClient): Promise<[Error, idType]> => {
        const q: pg.QueryConfig = {
          name: 'create_value',
          text: `
            INSERT INTO value (email, first_name, last_name, password) VALUES ($1, $2, $3, $4)
            RETURNING ID;
          `,
          values: [v.Email, v.FirstName, v.LastName, v.Password],
        };

        const result = await c.query(q);
        if (result.rowCount !== 1) {
          return [new Error(`unexpected number of rows created: expected 1 received ${result.rowCount}`), undefined];
        }

        return Promise.resolve([undefined, result.rows[0]]);
      });

      if (err) {
        throw err;
      }

      return [undefined, res.id];
    } catch (ex) {
      return [ex, undefined];
    }
  }

  async getValue(s: string): Promise<[Error, string]> {
    return [undefined, ''];
  }
}
