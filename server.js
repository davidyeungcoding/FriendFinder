// ==================
// || REQUIREMENTS ||
// ==================

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// ===============
// || VARIABLES ||
// ===============

var app = express();
var PORT = process.env.PORT || 8080;

// =================
// || APPLICATION ||
// =================

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ==============
// || LISTENER ||
// ==============

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});