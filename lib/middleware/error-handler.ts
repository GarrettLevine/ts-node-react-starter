import { Request, Response, NextFunction } from 'express';
import * as ErrorTypes from '../types/error';

export default function ErrorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
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