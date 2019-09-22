import * as express from 'express';
import * as bodyParser from 'body-parser';

import * as types from './types';

export class Handler {
  port: string;
  router: express.Router;
  errorHandler: express.RequestHandler;
  app: express.Application;

  constructor(o: types.Options) {
    this.port = o.port;
    this.router = o.router;
    this.errorHandler = o.errorHandler;

    const app: express.Application = express();
    app.set('trust proxy', 1);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(express.static(`${__dirname}/..`));

    if (this.router != undefined) {
      app.use('/', this.router);
    }

    if (this.errorHandler != undefined) {
      app.use(this.errorHandler);
    }

    this.app = app;
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`app listening on port: ${this.port}`);
    });
  }
}