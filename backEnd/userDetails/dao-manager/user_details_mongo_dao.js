'use strict';
const userDetails = require('../mongo-models/user_details');
const MongoDao = require('./mongo-dao');

class UserDetails extends MongoDao {

    constructor() {
        super(userDetails);
    }
}

module.exports = new UserDetails();