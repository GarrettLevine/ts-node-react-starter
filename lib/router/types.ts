import * as express from 'express';
import * as vs from './value-store.types';

export interface Options {
  valueStore: vs.ValueStore;
  routers?: [RouterOp];
}

export interface RouterOp {
  PathName: string;
  Routes: [express.RequestHandler];
}