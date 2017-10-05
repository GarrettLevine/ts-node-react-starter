import * as Express from 'express';

const path = require('path');
const router = Express.Router();

const getUser = require('./get-user');

router.get('/api/user', getUser);

router.use('/*', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    res.sendFile(path.resolve('public/index.html'), undefined, err => {
        if (err) next(err);
    });
});

module.exports = router;
