import * as express from 'express';
import * as types from './types';

export class Router {
  router: express.Router;

  constructor(o: types.Options) {
    const router = express.Router();
    if (!o.routers && o.routers.length > 0) {
      o.routers.forEach((ro: types.RouterOp) => {
        router.use(ro.PathName, ro.Routes);
      });
    }

    this.router = router;
  }

  getRouter(): express.Router {
    return this.router;
  }
}
