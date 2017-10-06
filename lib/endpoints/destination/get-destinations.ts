import * as Express from 'express';
const JSForce = require('jsforce');

const config = require('../../config');

const conn = new JSForce.Connection();

console.log(config.salesforce.username, `${config.salesforce.password}${config.salesforce.securityToken}`);
function getDestinations(req: Express.Request, res: Express.Response) {
    const promise = new Promise((resolve: any, reject: any) => {
        conn.login(config.salesforce.username, `${config.salesforce.password}${config.salesforce.securityToken}`, (err: any, userInfo: object) => {
            if (err) {
                reject(err);
                return;
            }
        });
        resolve(true);
    });
}

module.exports = getDestinations;
