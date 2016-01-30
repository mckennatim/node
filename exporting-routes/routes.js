var express = require('express');

module.exports = (function() {
    'use strict';
    var router = express.Router();

    router.get('/dog', function(req, res) {
        res.send('a dffog');
    });

    return router;
})();