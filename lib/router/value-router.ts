import * as express from 'express';
import { ClientError, ServiceError } from '../types/error';
import { Response, IDResp } from '../types/response';
import { Value } from '../types/value';
import { Options, ValueStore } from './value-store.types';

export class ValueRouter {
  router: express.Router;
  valueStore: ValueStore;
  constructor(o: Options) {
    this.valueStore = o.valueStore;


    const router = express.Router();
    router.post('/', this.createValue);

    this.router = router;
  }

  createValue = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const [ parseErr, userReq] = parseCreateValueReq(req);
    if (parseErr) {
      console.log(parseErr);
      next(parseErr);
      return;
    }

    try {
      const [createErr, vID ] = await this.valueStore.createValue(userReq);
      if (createErr) {
        next(new ServiceError());
        return;
      }

      const response: Response<IDResp> = {
        data: {
          id: vID,
        },
      };
      res.status(200).send(response);
    } catch (ex) {
      console.log(ex);
      next(new ServiceError());
      return;
    }

  }
}

function parseCreateValueReq(r: express.Request): [Error, Value] {
  type valueReq = {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
  };

  const { email, first_name, last_name, password }: valueReq = r.body;
  if (!email) {
    return [new ClientError('email must be provided'), undefined];
  }

  if (!first_name) {
    return [new ClientError('first_name must be provided'), undefined];
  }

  if (!last_name) {
    return [new ClientError('last_name must be provided'), undefined];
  }

  if (!password) {
    return [new ClientError('password must be provided'), undefined];
  }

  return [undefined, {
    Email: email,
    FirstName: first_name,
    LastName: last_name,
    Password: password,
  }];
}