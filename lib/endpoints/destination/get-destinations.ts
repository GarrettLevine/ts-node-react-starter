import * as Express from 'express';

const salesforce = require('node-salesforce');

const auth = new salesforce.OAuth2({
    clientId : '3MVG91ftikjGaMd.gNEtlhbu4kGmjqca97QILKk7l_hAZpzaUp0y2JojnxWOftpulAISLNnKDzmduRpqXulu.',
    clientSecret : '3130318372906603679',
    redirectUri : 'http://localhost:3000/salesforce/callback',
});

function getDestinations(req: Express.Request, res: Express.Response) {
    res.redirect(auth.getAuthorizationUrl({ scope: 'api id web' }));
}

module.exports = getDestinations;
