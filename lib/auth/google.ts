import * as Express from 'express';
import { Passport } from 'passport';

const auth = (app: any, p: Passport) => {
    app.get('/auth/login/google', p.authenticate('google', { scope: ['profile'] }));

    app.get('/auth/google/callback', p.authenticate('google', {
        successRedirect: '/?userSuccess',
        failureRedirect: '/?userFailure',
    }));

    app.get('/auth/logout', (req: Express.Request, res: Express.Response) => {
        req.logout();
        res.redirect('/');
    });
};

module.exports = auth;
