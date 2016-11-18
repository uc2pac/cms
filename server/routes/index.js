var express = require('express'),
    pages = require('./pages.js');

var router = express.Router();

router
    .get('/api/pages', pages.get)
    .get('/api/pages/:id', pages.get)
    .post('/api/pages', pages.create)
    .put('/api/pages/:id', pages.update)
    .delete('/api/pages/:id', pages.remove);

module.exports = router;