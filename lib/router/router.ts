import * as express from 'express';
import * as types from './types';

export class Router {
  router: express.Router;

  constructor(o: types.Options) {
    const router = express.Router();
    if (o.routers !== undefined && o.routers.length > 0) {
      o.routers.forEach((ho: types.RouterOp) => {
        router.use(ho.PathName, ho.Routes);
      });
    }

    this.router = router;
  }

  getRouter(): express.Router {
    return this.router;
  }
}
