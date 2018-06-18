// ==================
// || REQUIREMENTS ||
// ==================

var path = require('path');

// =============
// || EXPORTS ||
// =============

module.exports = function(app){
    
    // ============
    // || ROUTES ||
    // ============

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

};