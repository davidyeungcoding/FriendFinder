// ==================
// || REQUIREMENTS ||
// ==================

var friendArr = require('../data/friends');

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
        res.json(friendArr);
    });

    // ==========
    // || POST ||
    // ==========

    app.post('/api/friends', function(req, res) {
        friendArr.push(req.body);
        res.json(req.body);
    })

};