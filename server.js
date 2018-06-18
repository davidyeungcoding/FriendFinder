// ==================
// || REQUIREMENTS ||
// ==================

var express = require('express');
var bodyParser = require('body-parser');

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

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// ==============
// || LISTENER ||
// ==============

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});