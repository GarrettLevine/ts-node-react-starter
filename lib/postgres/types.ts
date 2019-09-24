import * as pg from 'pg';
import { promises } from 'dns';

export interface Options {
  database: string;
  user: string;
  password: string;
  port: number;
  host: string;
}

// ClientFn represents a function which receives the client pool connection.
export interface ClientFn {
  <T>(client: pg.PoolClient): Promise<[Error, T]>;
}

// Client represents an interface for a Postgres client.
export interface Client {
  Do<T>(fn: ClientFn): Promise<[Error, T]>;
}