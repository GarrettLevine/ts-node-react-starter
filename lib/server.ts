import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';

import { Request, Response } from 'express';

const app = express();
app.set('trust proxy', 1);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/..`));

app.listen('3000', () => {
    console.log(('  App is running at http://localhost:3000 in dev mode'));
    console.log('  Press CTRL-C to stop\n');
});