var express = require('express'),
    pages = require('./pages.js');

var router = express.Router();

router
    .get('/api/pages.get', pages.get)
    .get('/api/pages.getone', pages.get)
    .post('/api/pages.post', pages.create);

module.exports = router;