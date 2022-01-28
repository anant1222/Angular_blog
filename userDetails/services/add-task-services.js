const initModels = require("../../models/init-models");
const sequelize = require('../../utils/db-connection').createPool
const responseCode = require('../../utils/response-code')
// const {  } = require('../dao-manager')
const models = initModels(sequelize);
const addTask = async (data) => {
    try {
        let responseObject = {}
        let res = await models.users.create(data)
        if (res) {
            responseObject.code = responseCode.SUCCESS;
            responseObject.data = {};
        } else {
            responseObject.code = responseCode.SOME_INTERNAL_ERROR;
            responseObject.data = {};
        }
        return responseObject
    } catch (error) {
        return { code: 402, message: "some internal error!" };
    }
}
module.exports = addTask