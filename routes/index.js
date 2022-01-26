'use strict';
const angularBasic = require('../userDetails');
module.exports = function(app) {
    app.use('/api/v1',angularBasic);
};
