import * as pg from 'pg';

export interface Options {
  database: string;
  user: string;
  password: string;
  port: number;
  host: string;
}

export interface ClientFn {
  <T>(client: pg.PoolClient): Promise<[Error, T]>;
}
