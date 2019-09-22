import * as express from 'express';
import { ClientError, ServiceError } from '../types/error';
import { Response, StatusResp, IDResp } from '../types/response';
import { Value } from '../types/value';
import { Router } from './router';

export class ValueRouter extends Router {
  async createValue(req: express.Request, res: express.Response, next: express.NextFunction) {
    const [ parseErr, userReq] = parseCreateValueReq(req);
    if (parseErr) {
      next(parseErr);
      return;
    }

    const [createErr, id ] = await this.valueStore.createValue(userReq);
    if (createErr) {
      next(new ServiceError());
      return;
    }

    const response: Response<IDResp> = {
      data: {
        id: id,
      },
    };
    res.status(200).send(response);
  }
}

function parseCreateValueReq(r: express.Request): [Error, Value] {
  type valueReq = {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
  };

  let value: Value; // tslint:disable-line
  const { email, first_name, last_name, password }: valueReq = r.body;

  if (email === '') {
    return [new ClientError('email must be provided'), value];
  }
  value.Email = email;

  if (first_name === '') {
    return [new ClientError('first_name must be provided'), value];
  }
  value.FirstName = first_name;

  if (last_name === '') {
    return [new ClientError('last_name must be provided'), value];
  }
  value.LastName = last_name;

  if (password === '') {
    return [new ClientError('password must be provided'), value];
  }
  value.Password = password;

  return [undefined, value];
}