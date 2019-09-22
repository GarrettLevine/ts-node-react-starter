import * as express from 'express';
import * as types from './types';
import * as vsTypes from './value-store.types';

export class Router {
  valueStore: vsTypes.ValueStore;
  router: express.Router;

  constructor(o: types.Options) {
    this.valueStore = o.valueStore;

    const router = express.Router();
    if (o.Handlers !== undefined && o.Handlers.length > 0) {
      o.Handlers.forEach((ho: types.HandlerOp) => {
        router.use(ho.Path, ho.Routes);
      });
    }

    this.router = router;
  }

  getRouter(): express.Router {
    return this.router;
  }
}
