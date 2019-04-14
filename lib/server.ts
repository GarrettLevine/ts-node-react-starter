import * as express from 'express';
import * as bodyParser from 'body-parser';
import router from './router';

const app: express.Application = express();
const port: string = process.env.PORT || '3000';

app.set('trust proxy', 1);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/..`));
app.use('/', router);

app.listen(port, () => {
    console.log(`App is running at on port ${port} in dev mode`);
    console.log('Press CTRL-C to stop\n');
});