const initModels = require("../../models/init-models");
const sequelize = require('../../utils/db-connection').createPool
const responseCode = require('../../utils/response-code')
const moment = require('moment')
// const {  } = require('../dao-manager')
const models = initModels(sequelize);
const addTask = async (data) => {
    try {
        let responseObject = {}
        let currTime = moment().unix()*1000
        data.updated_on = currTime;
        data.created_on = currTime;
        let res = await models.user_data.create(data)
        if (res) {
            responseObject.code = responseCode.SUCCESS;
            responseObject.data = {};
        } else {
            responseObject.code = responseCode.SOME_INTERNAL_ERROR;
            responseObject.data = {};
        }
        return responseObject
    } catch (error) {
        responseObject.code = responseCode.SOME_INTERNAL_ERROR;
        responseObject.data = {};
    }

    return responseObject
}
module.exports = addTask