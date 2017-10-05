import * as Express from 'express';

const router = Express.Router();
const userEndpoints = require('../endpoints/user');
const destinationEndpoints = require('../endpoints/destination');

// USER endpoints
router.get('/user', userEndpoints.getUser);
router.post('/start-date', userEndpoints.userStartDate);

// DESTINATION endpoints
router.get('/destinations', destinationEndpoints.getDestinations);

module.exports = router;

