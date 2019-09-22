import * as handler from './handler/handler';
import * as hTypes from './handler/types';
import * as vRouter from './router/value-router';
import * as vrTypes from './router/value-store.types';
import * as router from './router/router';
import * as rTypes from './router/types';
import * as postgres from './postgres';
import * as pgTypes from './postgres/types';
import { ErrorHandler } from './middleware/error-handler';

const port: string = process.env.PORT || '3000';

const op: pgTypes.Options = {
    database: 'localhost',
    user: 'garrettlevine',
    password: '',
    host: '',
    port: 1234,
};
const pg = new postgres.default(op);
const vrOp: vrTypes.Options = {
    valueStore: pg,
};

const valueRouter = new vRouter.ValueRouter(vrOp);
const rop: rTypes.Options = {
    valueStore: pg,
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
