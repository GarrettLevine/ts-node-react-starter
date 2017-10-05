import * as Express from 'express';
import { Passport } from 'passport';

const auth = (app: any, passport: Passport) => {
    app.get('/auth/login/bamboo', passport.authenticate('bamboo'));

    app.get('/auth/bamboo/return',
    passport.authenticate('bamboo', {
        successRedirect: '/?userSuccess',
        failureRedirect: '/?userFailure',
    }));


    app.get('/auth/login/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/return',
    passport.authenticate('facebook', {
        successRedirect: '/?userSuccess',
        failureRedirect: '/?userFailure',
    }));

    app.get('/auth/logout', function(req: Express.Request, res: Express.Response) {
        req.logout();
        res.redirect('/');
    });
};

module.exports = auth;
