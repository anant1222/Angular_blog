const express = require('express');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var router = require('./routes/index');
var addRequestId = require('express-request-id')();
var useragent = require('express-useragent');
const http = require('http');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const db_config = require(path.join(__dirname, 'config/dbconfig'))[env];
global.NODE_PATH = db_config.NODE_MODULES_PATH;
var createError = require('http-errors');
const server = http.createServer(app);
var app = express();
app.use(addRequestId);
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.get('/', function (req, res) {
    res.send({
        greet:'Working Now!'
    });
})
router(app);
app.use(useragent.express());
global.mysqlTimestamp = function(){
    return Math.round(Date.now()/1000);
};

global.mysqlCurrDateTime = function(){
    var date1 = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    var date2 = new Date(Date.now()).toLocaleString();
    var date2_2 = date2.split(' ')[1];
    return date1+" "+date2_2;
};

global.mysqlCurrDateTimeForAdminMsg = function(){
    var d = new Date(),
        day = (d.getDate()<10?'0':'') + d.getDate(),
        mnth = ((d.getMonth()+1)<10?'0':'') + (d.getMonth()+1),
            year = d.getFullYear(),
      h = (d.getHours()<10?'0':'') + d.getHours(),
      m = (d.getMinutes()<10?'0':'') + d.getMinutes();
    var date2_1 = day+'-'+mnth+'-'+year;
    var date2_2 = h+":"+m;
    return date2_1+" "+date2_2;
};
app.listen(3030,()=>{console.log(`Server started in http://localhost:3030`)})

module.exports = app;

console.log('done')
