// import { Passport } from 'passport';
// import { Request } from 'express';
// const bamboohrStrategy = require('passport-bamboohr');
// const user = require('../models/User');

// interface StrategyOptions {
//     clientID: string;
//     clientSecret: string;
//     callbackURL: string;
//     passReqToCallback: boolean;
// }

// const options: StrategyOptions = {
//     clientID: process.env.FACEBOOK_APP_ID,
//     clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
//     callbackURL: process.env.FACEBOOK_CALLBACK_URL || 'http://localhost:3000/auth/facebook/return',
//     passReqToCallback : true, // allows us to pass in the req from our route (lets us check if a user is logged in or not)
// };

// const passport = (p: Passport) => {
//     p.serializeUser((u: UserModel, done: any) => {
//         done(undefined, u.id);
//     });

//     p.deserializeUser((id: number, done: any) => {
//         user.findById(id, (err: any, u: UserModel) => {
//             done(err, user);
//         });
//     });

//     p.use(new bamboohrStrategy(options, (req: Request, token: string, refreshToken: string, profile: any, done: any) => {
//         if (!req.session.userId) {
//             User.findById(req.session.userId).then((user: any) => {

//             });
//         }
//     }));
// };

// module.exports = passport;
