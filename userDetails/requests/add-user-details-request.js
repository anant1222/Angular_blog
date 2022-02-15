'use strict';
const Joi = require('joi');
module.exports = async (request, response, next) => {
    try {
        if (request.body) {
            Object.keys(request.body).forEach(key => {
                if (request.body[key] === '' || request.body[key] == null) {
                    delete request.body[key];
                }
            });
        }
        const Schema = Joi.object().keys({
            user_name: Joi.string().min(3).max(20).alphanum().trim().regex(/^[a-zA-Z]+[a-zA-Z0-9_]*/m).required().error(new Error('Enter a valid user name!')),
            first_name: Joi.string().trim().error(new Error('Enter a valid first name!')),
            last_name: Joi.string().trim().error(new Error('Enter a valid last name!')),
            mobile: Joi.string().trim().regex(/^[0-9]{10}$/).required().error(new Error('Enter a valid mobile number!')),
            desc: Joi.string().trim().required().error(new Error('description is mandatory!')),
        });
        request.body = await Joi.validate(request.body, Schema);
        next();
    } catch (error) {
        if (error && error.message) {
            response.json(error.message);
        } else {
            response.json(error);
        }
    }
}