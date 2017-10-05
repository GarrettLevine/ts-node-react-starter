import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as Passport from 'passport';
import * as path from 'path';
import * as ExpressSession from 'express-session';

import { Request, Response } from 'express';

const router = require('./router');
const session = require('./session');
const config = require('./config');

const app = express();

// passport configuration
app.set('trust proxy', 1);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup session middleware
app.use(ExpressSession({
    cookie: {
        maxAge: 14 * 24 * 60 * 60 * 1000, // two weeks
      },
      name: 'consoleSessionId',
      resave: false,
      saveUninitialized: true,
      secret: config.session.secret,
}));

require('./config/passport')(Passport); // pass passport for configuration
// initialize passort
app.use(Passport.initialize());
// restore session
app.use(Passport.session());
require('./auth/google')(app, Passport); // pass passport for configuration

app.use(express.static(`${__dirname}/..`));
app.use('/', router);

app.listen('3000', () => {
    console.log(('App is running at http://localhost:3000 in dev mode'));
    console.log('Press CTRL-C to stop \n');
});