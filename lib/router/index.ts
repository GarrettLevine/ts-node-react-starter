import * as Express from 'express';
import * as path from 'path';
import * as responseTypes from '../types/response';

const router = Express.Router();
router.get('/api', (_req: Express.Request, res: Express.Response, _next: Express.NextFunction) => {
    res.status(200).json(new responseTypes.DataResponse('great'));
});

router.get('*', (_req: Express.Request, res: Express.Response) => {
    res.sendFile(path.resolve('public/index.html'));
});

export default router;
