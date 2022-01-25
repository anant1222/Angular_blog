const express = require('express')
var cors = require('cors');
var cookieParser = require('cookie-parser');
var router = require('./routes/index');
var addRequestId = require('express-request-id')();
var useragent = require('express-useragent');
const http = require('http');
var createError = require('http-errors');
const server = http.createServer(app);
var app = express();
app.use(addRequestId);
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.get('/', function (req, res) {
    // body...
    res.send({
        greet: 'Hello!',
        msg: 'Welcome to the User.',
        module: 'Angular Basic'
    });
})
router(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
app.use(useragent.express());

module.exports = app;

console.log('done')
