import * as ExpressSession from 'express-session';
import * as ConnectRedis from 'connect-redis';

const { secret: sessionSecret } = require('./config/session');
const redisOptions = require('./config/redis');


let eSession: any;

const getExpressMW = () => {
    // Only instantiate express session once.
    if (eSession) return eSession;

    const RedisStore = ConnectRedis(ExpressSession);
    eSession = ExpressSession({
      cookie: {
        maxAge: 14 * 24 * 60 * 60 * 1000, // two weeks
      },
      name: 'consoleSessionId',
      resave: false,
      saveUninitialized: true,
      secret: sessionSecret,
      store: new RedisStore(redisOptions),
    });

    return eSession;
  };


