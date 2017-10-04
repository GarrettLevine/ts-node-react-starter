import * as Express from 'express';

const router = Express.Router();

router.use('/*', () => {});

module.exports = router;