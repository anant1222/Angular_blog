'use strict';
const addTaskController = require('./add-task-controller')
const getUserController = require('./get-user-controller')
const userDetailsController = require('./add-user-data-controller')
const updateUserDetailsController = require('./update-user-data-controller')
const listUserDetailsController = require('./list-user-data-controller')
const deleteUserDetails = require('./delete-user-data-controller')
module.exports = {
    addTaskController,
    getUserController,
    userDetailsController,
    updateUserDetailsController,
    listUserDetailsController,
    deleteUserDetails
}