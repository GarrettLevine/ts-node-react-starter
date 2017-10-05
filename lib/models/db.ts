import * as Sequelize from 'sequelize';

const dbName: string = process.env.GOOSE_DB_NAME;
const dbUsername: string = process.env.GOOSE_DB_USERNAME;
const dbPassword: string = process.env.GOOSE_DB_PASSWORD;
const dbHost: string = process.env.GOOSE_DB_HOST;
const dbPort: number = Number(process.env.GOOSE_DB_PORT);

const options: Sequelize.Options = {
    host: dbHost,
    port: dbPort,
    dialect: 'postgress',
    logging: false,
    retry: { max: 3 },
};

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, options);

module.exports = sequelize;
