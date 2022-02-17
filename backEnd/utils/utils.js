'use strict';
const responseMessage = require('./response-message');
const responseCode = require('./response-code');
const moment = require('moment');

module.exports = class utils {
    constructor() {
    }
    static response(code, data, message) {

        let returnObj = {
            code: code
        };
        if (message) {
            returnObj.message = message;
        } else {
            returnObj.message = responseMessage[code]
        }
        if (data) {
            returnObj.data = data;
        }
        return returnObj;
    }

    static responseFormat(code = 200, data = {}, message = "") {
        return {
            code: code,
            data: data,
            message: message
        };
    }

    static mysqlDate() {
        return moment().format('YYYY-MM-DD HH:mm:ss');
    }

    static errorMessage(details) {
        let res = this.responseFormat(responseCode.INVALID_REQUEST_PARAMS)
        res.message=responseMessage[res.code]
        if (details.type == "string.regex.base") {

            res.message = `${details.context.key} is invalid.`;
            res.data = {}
        }
        if (details.type == "any.required") {

            res.message = `${details.context.key} is required.`;
            res.data = {}
        }
        if (details.type == "number.base") {

            res.message = `${details.context.key} is invalid.`;
            res.data = {}
        }
        if (details.type == "string.base") {

            res.message = `${details.context.key} is invalid.`;
            res.data = {}
        }
        if (details.type == "any.allowOnly") {

            res.message = `${details.context.key} is invalid.`;
            res.data = {}
        }

        if (details.type == "string.regex.invert.base") {

            res.message = `${details.context.key} must match pattern.`;
            res.data = {}
        }

        if (details.type == "string.min") {

            res.message = `${details.context.key} length must be at least ${details.context.limit} characters long.`;
            res.data = {}

        }
        if (details.type == "string.max") {

            res.message = `${details.context.key} length must be less than or equal to ${details.context.limit} characters long.`;
            res.data = {}

        }

        if (details.type == "string.alphanum") {

            res.message = `${details.context.key} must only contain alpha-numeric characters.`;
            res.data = {}

        }

        if (details.type == "object.allowUnknown") {

            res.message = `${details.context.key} is not allowed.`;
            res.data = {}

        }

        if (details.type == "string.length") {

            res.message = `${details.context.key} length must be ${details.context.limit} characters long.`;
            res.data = {}
        }
        if (details.type == "number.greater") {

            res.message = `${details.context.key} must be greater`;
            res.data = {}
        }
        if (details.type == "string.email") {
            res.message = `Enter a valid email.`;
            res.data = {}
        }
        return res
    }
};