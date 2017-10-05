import * as Express from 'express';

const user = require('../models/User');

function setStartDate(req: Express.Request, res: Express.Response) {
    if (!req.session.passport || !req.session.passport.user) {
        res.status(200).json({ error: 'No user in the session' });
        return;
    }

    user.findById(req.session.passport.user).then((u: any) => {
        u.start_date = req.body.start_date;

        return u.save();
    })
    .then((u: any) => {
        const userData: UserModel = {
            id: u.id,
            first_name: u.first_name,
            last_name: u.last_name,
            avatar_url: u.avatar_url,
            start_date: u.start_date,
        };

        res.status(200).json({ data: userData });
    })
    .catch((err: any) => {
        res.status(500).json({ error: 'internal service error' });
    });
}

module.exports = setStartDate;