import * as pg from 'pg';
import { Client, ID } from './types';
import * as valueTypes from '../types/value';

export class Value  {
  client: Client;
  constructor(c: Client) {
    this.client = c;
  }

  // CreateValue creates a value in the ValueStore given the provided Value, returning the ID of the new value if successful.
  CreateValue = async (v: valueTypes.Value): Promise<[Error, string]> => {
    try {
      const [err, res ] = await this.client.Do<ID>(async <ID>(c: pg.PoolClient): Promise<[Error, ID]> => {
        const q: pg.QueryConfig = {
          name: 'create_value',
          text: `
            INSERT INTO value (email, first_name, last_name, password)
            VALUES ($1, $2, $3, $4)
            RETURNING ID;
          `,
          values: [v.Email, v.FirstName, v.LastName, v.Password],
        };

        const result = await c.query(q);
        if (result.rowCount !== 1) {
          return [new Error(`unexpected number of rows created: expected 1 received ${result.rowCount}`), undefined];
        }

        return [undefined, result.rows[0]];
      });

      if (err) {
        throw err;
      }

      return [undefined, res.id];
    } catch (ex) {
      return [ex, undefined];
    }
  }

  async GetValue(s: string): Promise<[Error, string]> {
    return [undefined, ''];
  }
}
