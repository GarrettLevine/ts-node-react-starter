import * as Express from 'express';

const path = require('path');
const router = Express.Router();

router.use('/*', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    res.sendFile(path.resolve('public/index.html'), undefined, err => {
        if (err) next(err);
    });
    next();
});

module.exports = router;
