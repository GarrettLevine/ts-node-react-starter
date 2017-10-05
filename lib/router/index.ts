import * as Express from 'express';

const path = require('path');
const router = Express.Router();

router.use('/*', (req, res, next) => {
    res.sendFile(path.resolve('public/index.html'), undefined, err => {
        if (err) next(err);
    });
});

module.exports = router;