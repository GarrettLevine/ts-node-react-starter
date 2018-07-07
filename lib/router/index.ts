import * as Express from 'express';
import * as path from 'path';

const router = Express.Router();
router.get('/api', (req, res, next) => {
    res.status(200).json({ great: 'great' });
});

router.get('*', (_req: Express.Request, res: Express.Response) => {
    res.sendFile(path.resolve('public/index.html'));
});

export default router;
