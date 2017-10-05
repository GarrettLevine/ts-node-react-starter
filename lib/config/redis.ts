/**
 * redisDb() checks if a DB number was provided in the config and tries
 * to parse it into an int.
 */
const redisDb = () => {
  if (process.env.REDIS_DB) {
    return parseInt(process.env.REDIS_DB, 10);
  }
  return 0;
};

module.exports = {
  host: process.env.GOOSE_REDIS_HOST || 'localhost',
  port: process.env.GOOSE_REDIS_PORT || 6379,
  db: redisDb(),
};
