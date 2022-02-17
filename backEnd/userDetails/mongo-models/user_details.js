'use strict';
const {connection} = require("../../utils/mongo-connection");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
require('mongoose-long')(mongoose);
const {Types: {Long}} = mongoose;
const userDetails = new mongoose.Schema({
    user_id: Number,
    user_name:String,
    first_name:String,
    last_name:String,
    mobile:String,
    desc:String,
    ct: {
        type:Long
    },
    ut: {
        type:Long
    },
}, {
    timestamps: false,
    versionKey:false
});

module.exports = connection.model('userDetails', userDetails, "user_details");



