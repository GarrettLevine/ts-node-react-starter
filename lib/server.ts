import * as handler from './handler/handler';
import * as hTypes from './handler/types';
import * as router from './router/router';
import * as rTypes from './router/types';
import * as postgres from './postgres';
import * as pgTypes from './postgres/types';

const port: string = process.env.PORT || '3000';

const op: pgTypes.Options = {
    database: 'localhost',
    user: 'garrettlevine',
    password: '',
    host: '',
    port: 1234,
};
const pg = new postgres.default(op);

const rop: rTypes.Options = {
    valueStore: pg,
};
const r = new router.Router(rop);

const hop: hTypes.Options = {
    port: port,
    router: r.getRouter(),
};

const h =  new handler.Handler(hop);
h.listen();
