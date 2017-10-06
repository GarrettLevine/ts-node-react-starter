interface SalesforceConfig {
    username: string;
    password: string;
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    securityToken: string;
}

const config: SalesforceConfig = {
    username: 'sibil.samuel@crowdriff.com',
    password: 'Mykuttanonly@12',
    clientId : '3MVG91ftikjGaMd.gNEtlhbu4kGmjqca97QILKk7l_hAZpzaUp0y2JojnxWOftpulAISLNnKDzmduRpqXulu.',
    clientSecret : '3130318372906603679',
    redirectUri : 'http://localhost:3000/salesforce/callback',
    securityToken: 'nzBKs9bQzwOZEl6yst4H8m8p',
};

module.exports = config;
