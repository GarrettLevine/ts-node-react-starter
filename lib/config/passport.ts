import { Passport } from 'passport';
import { Request } from 'express';

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const user = require('../models/User');

interface StrategyOptions {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    passReqToCallback: boolean;
}

const options: StrategyOptions = {
    clientID: '507028664291-epin3ugjc2uv1o605jkpe5snub2go2am.apps.googleusercontent.com',
    clientSecret: '1lnw8NH3eKuvXga7HPv2dDjJ',
    callbackURL: 'http://localhost:3000/auth/google/callback',
    passReqToCallback : true, // allows us to pass in the req from our route (lets us check if a user is logged in or not)
};

const passport = (p: Passport) => {
    p.serializeUser((u: UserModel, done: any) => {
        done(undefined, u.id);
    });

    p.deserializeUser((id: number, done: any) => {
        user.findById(id).then((u: any) => {
            done(undefined, u);
        })
        .catch((err: any) => {
            done(err, undefined);
        });
    });

    process.nextTick(() => {
        p.use(new GoogleStrategy(options, (req: Express.Request, accessToken: any, refreshToken: any, profile: any, cb: any) => {
            return user.findOne({
                where: {
                    google_id: profile.id,
                },
            }).then((u: any) => {
                if (u) {
                    return cb(undefined, u);
                }

                return user.create({
                    first_name: profile.name.givenName,
                    last_name: profile.name.familyName,
                    avatar_url: profile.photos[0].value || 'http://www.placecage.com/300/300',
                    google_id: profile.id
                });
            })
            .then((u: any) => {
                return cb(undefined, u);
            });
        }));
    });
};

module.exports = passport;
