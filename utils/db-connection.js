'use strict';
const Sequelize = require('sequelize');
const config = require("../config/dbconfig").development;
const chalk = require('chalk');

const createPool = new Sequelize(config.cachyDatabase.database, config.cachyDatabase.user,
    config.cachyDatabase.password, {
        //timezone: '+05:30', //here you can pass timezone
        host: config.cachyDatabase.host,
        dialect: 'mariadb',
        logging: config.cachyDatabase.logging,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });


    createPool.authenticate()
    .then(() => {
        console.log(chalk.green('Mysql Connection has been established successfully for pool.'));
    })
    .catch(err => {
        console.log(chalk.red('Unable to connect to the pool database: ', err));
        throw new Error('mysql error: Connection Failure');
    })


module.exports = {
    createPool
};