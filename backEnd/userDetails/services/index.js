'use strict';
const addTaskService = require('./add-task-services')
const getUserService = require('./get-user-service')
const getUserDetailsService = require('./add-user-details-service')
const updateUserDetailsService = require('./update-user-details-service')
const listUserDetailService = require('./list-user-details-service')
const deleteUserDetailService = require('./delete-user-details-service')
module.exports={
    addTaskService,
    getUserService,
    getUserDetailsService,
    updateUserDetailsService,
    listUserDetailService,
    deleteUserDetailService
}