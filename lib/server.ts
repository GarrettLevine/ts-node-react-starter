import { App } from './app/app';
import * as aTypes from './app/types';
import { ValueRouter } from './router/value-router';
import * as router from './router/router';
import * as rTypes from './router/types';
import { Postgres } from './postgres/postgres';
import { Value as ValueStore } from './postgres/value';
import * as pgTypes from './postgres/types';
import { ErrorHandler } from './middleware/error-handler';

const port: string = process.env.PORT || '3000';

const op: pgTypes.Options = {
    database: process.env.DB_NAME || 'test',
    user: process.env.DB_USER || 'garrett',
    password: process.env.DB_PASSWORD || '',
    host: process.env.HOST || 'localhost',
    port: Number(process.env.PORT) || 5432,
};
const pg = new Postgres(op);

const valueStore = new ValueStore(pg);
const valueRouter = new ValueRouter(valueStore);
const rop: rTypes.Options = {
    routers: [{
        PathName: '/value',
        Routes: valueRouter.router,
    }],
};
const r = new router.Router(rop);

const aops: aTypes.Options = {
    port: port,
    router: r.getRouter(),
    errorHandler: ErrorHandler,
};

const h =  new App(aops);
h.listen();
