// ==================
// || REQUIREMENTS ||
// ==================

var tableData = require('../data/friends');

// =============
// || EXPORTS ||
// =============

module.exports = function(app) {
    
    // ============
    // || ROUTES ||
    // ============

    // =========
    // || GET ||
    // =========

    app.get('/api/friends', function(req, res) {
        res.json(tableData);
    });

    // ==========
    // || POST ||
    // ==========

    app.post('api/friends', function(req,res) {
        tableData.push(req.body);
    })

};