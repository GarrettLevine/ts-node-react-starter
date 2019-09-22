import * as express from 'express';
import * as vs from './value-store.types';

export interface Options {
  valueStore: vs.ValueStore;
  Handlers?: [HandlerOp];
}

export interface HandlerOp {
  Path: string;
  Routes: [express.RequestHandler];
}