const initModels = require("../../models/init-models");
const sequelize = require('../../utils/db-connection').createPool
const {userDetailsMongoDao} = require('../dao-manager')
const responseCode = require('../../utils/response-code')
const moment = require('moment')
const models = initModels(sequelize);
const updateUserDetails = async (req) => {
    try {
        let responseObject = {}
        let currTime = moment().unix()*1000
        let insertData ={
            ut:currTime
        };
        if(req.user_name){
            insertData.user_name = req.user_name
        }
        if(req.first_name){
            insertData.first_name = req.first_name
        }
        if(req.last_name){
            insertData.last_name = req.last_name
        }
        if(req.mobile){
            insertData.mobile = req.mobile
        }
        if(req.desc){
            insertData.desc = req.desc
        }
        try {
            let res = await userDetailsMongoDao.update({user_id:req.user_id},insertData,{upsert:true})
        } catch (error) {
        }
        if(res){
            responseObject.code = responseCode.SUCCESS;
            responseObject.data = {};
        }else{
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
module.exports = updateUserDetails