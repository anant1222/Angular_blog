'use strict';
var config = {
	development : {
		//mysql connection settings
		cachyDatabase : {
			host : 'localhost',
			user : 'root',
			password : '',
			port:3306,
			database : 'angular_basic',
			connectionLimit : 200, //important
			logging: (process.env.MYSQL_LOGGING == 'YES') || false,
			debug: (process.env.MYSQL_DEBUG == 'YES') || false
		},
		isSwaggerAPI: (process.env.SWAGGER_API == 'YES') || true,
		//server details
		
	},
};

module.exports = config;