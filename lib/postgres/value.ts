import * as pg from 'pg';
import { Client } from './types';
import * as valueTypes from '../types/value';

export class Value  {
  client: Client;
  constructor(c: Client) {
    this.client = c;
  }

  createValue = async (v: valueTypes.Value): Promise<[Error, string]> => {
    type idType = {
      id: string;
    };

    try {
      const [err, res ] = await this.client.Do<idType>(async <idType>(c: pg.PoolClient): Promise<[Error, idType]> => {
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
