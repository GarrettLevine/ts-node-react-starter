import * as express from 'express';
import * as vs from './value-store.types';

export interface Options {
  routers?: [RouterOp];
}

export interface RouterOp {
  PathName: string;
  Routes: express.Router;
}