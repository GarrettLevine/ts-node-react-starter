import * as Express from 'express';

export interface Options {
  port: string;
  router?: Express.Router;
  errorHandler?: Express.ErrorRequestHandler;
}
