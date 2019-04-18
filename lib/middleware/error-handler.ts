import * as Express from 'express';
import * as ErrorTypes from '../types/error';

export function ErrorHandler(err: Error, _req: Express.Request, res: Express.Response, _next: Express.NextFunction) {
  if (err instanceof ErrorTypes.ClientError) {
    res.status(err.code).send({ error: err.Message() });
    return;
  }

  if (err instanceof ErrorTypes.ServiceError) {
    res.status(err.code).send({ error: err.Message() });
    return;
  }

  if (err instanceof ErrorTypes.ErrorType) {
    res.status(500).send({ error: err.Message() });
    return;
  }

  res.status(500).send({ error: err.message });
}