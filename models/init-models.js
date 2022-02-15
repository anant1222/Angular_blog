var DataTypes = require("sequelize").DataTypes;
var _user_data = require("./user_data");

function initModels(sequelize) {
  var user_data = _user_data(sequelize, DataTypes);


  return {
    user_data,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
