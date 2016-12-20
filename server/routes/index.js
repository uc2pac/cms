var express = require('express'),
    router = express.Router();

var pages = require('./pages'),
    categories = require('./categories'),
    media = require('./media');

router
    .all(['/api/resources', '/api/resources*'], media)
    .all(['/api/categories', '/api/categories*'], categories)
    .all(['/api/pages', '/api/pages*'], pages);

module.exports = router;