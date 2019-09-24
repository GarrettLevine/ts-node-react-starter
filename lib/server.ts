import * as handler from './handler/handler';
import * as hTypes from './handler/types';
import * as vRouter from './router/value-router';
import * as router from './router/router';
import * as rTypes from './router/types';
import { Postgres } from './postgres/postgres';
import { Value } from './postgres/value';
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

const valueStore = new Value(pg);

const valueRouter = new vRouter.ValueRouter(valueStore);
const rop: rTypes.Options = {
    routers: [{
        PathName: '/value',
        Routes: [valueRouter.router],
    }],
};
const r = new router.Router(rop);

const hop: hTypes.Options = {
    port: port,
    router: r.getRouter(),
    errorHandler: ErrorHandler,
};

const h =  new handler.Handler(hop);
h.listen();
