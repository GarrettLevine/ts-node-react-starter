import * as Express from 'express';

const path = require('path');
const router = Express.Router();

router.get('/api', (req, res, next) => {
    res.status(200).json({ great: 'great' });
});

router.get('*', (_req: Express.Request, res: Express.Response) => {
    res.sendFile(path.resolve('public/index.html'));
});

module.exports = router;
