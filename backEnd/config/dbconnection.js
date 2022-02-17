const MongoClient = require('mongodb').MongoClient;
const dbconfig = require("./dbconfig.js").development;
module.exports = {
	 MongoClient  : MongoClient,
	 mongoUrl : dbconfig.url
};