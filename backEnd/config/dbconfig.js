'use strict';
const format = require('util').format;
const mongoBannerPaneldb = {
    useAuth: (process.env.MONGODB_USE_AUTH == 'YES') || false,
    withAuthDbDetails: {
		username: process.env.MONGO_USERNAME || "",
		password: process.env.MONGO_PASSWORD || "",
		authDb: "angular_basic",
        host: process.env.MONGO_HOST || "localhost",
        port: 27017,
        authMechanism: "SCRAM-SHA-1",
        database: 'user_details',
        connectionLimit: 100,
        debug: false
    },
    WithOutAuthDbDetails: {
        username: "",
        password: "",
        authDb: "",
        host: process.env.MONGO_HOST || "localhost",
        port: 27017,
        authMechanism: "SCRAM-SHA-1",
        database: 'user_details',
        connectionLimit: 100,
        debug: false
    }
};

function createMongoUrl(mconf) {
    var mWithoutAuth = mconf.WithOutAuthDbDetails;
    var url = process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || mWithoutAuth.host + ':' + mWithoutAuth.port) + '/' + mWithoutAuth.database;
	if (mconf.useAuth) {
        var mWithAuth = mconf.withAuthDbDetails;
        url = format("mongodb://%s:%s@%s:%s/%s?authMechanish=%s&authSource=%s", mWithAuth.username, mWithAuth.password, mWithAuth.host, mWithAuth.port, mWithAuth.database, mWithAuth.authMechanism, mWithAuth.authDb);

	}
    return url;
}
var config = {
	development : {
		url : createMongoUrl(mongoBannerPaneldb),
		angularDatabase : {
			host : 'localhost',
			user : 'root',
			password : '',
			port:3306,
			database : 'user_details',
			connectionLimit : 200, //important
			logging: (process.env.MYSQL_LOGGING == 'NO') || false,
			debug: (process.env.MYSQL_DEBUG == 'YES') || false
		},
		isSwaggerAPI: (process.env.SWAGGER_API == 'YES') || true,
		
	},
};
module.exports =config
