'use strict'

module.exports = (() => {
    const dburl = require('../config/dbconnection').mongoUrl;
    const userDataMongoose = require('mongoose');
    const chalk = require('chalk');
    let db = null;

    const getConnectionObject = () => {
        if (!(db === null)) {
            return db;
        } else {
            createConnection();
        }
    }

    const createConnection = () => {
        db = userDataMongoose.createConnection(dburl, {
            poolSize: 4,
            useFindAndModify: false
        });
        return db;
    }

    createConnection();

    db.on("connected", function () {
        console.log(chalk.green('Mongo connected successfully'));
    });

    db.on("error", function (err) {
        console.log(chalk.red('Mongo Unable to connect to the database: ', err));
        throw new Error('mongo error: Connection Failure');
    });

    db.once("open", function () {
        console.log(chalk.green("client MongoDB Connection ok "));
    });

    return {
        connection: getConnectionObject(),
    };
})();