import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as Passport from 'passport';
import * as path from 'path';

import { Request, Response } from 'express';

const router = require('./router');
const session = require('./session');

const app = express();

// passport configuration
require('./server/config/passport')(Passport); // pass passport for configuration

app.set('trust proxy', 1);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session.getExpressMW());

app.use(express.static(`${__dirname}/..`));
app.use('/', router);

app.listen('3000', () => {
    console.log(('App is running at http://localhost:3000 in dev mode'));
    console.log('Press CTRL-C to stop \n');
});