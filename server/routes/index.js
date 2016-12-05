var express = require('express'),
    pages = require('./pages.js'),
    media = require('./media.js');

var router = express.Router();

router
    // Page Manager
    .get('/api/pages', pages.get)
    .get('/api/pages/:id', pages.get)
    .post('/api/pages', pages.create)
    .put('/api/pages/:id', pages.update)
    .delete('/api/pages/:id', pages.remove)
    // Media Library
    .get('/api/directories', media.getResources)
    .post('/api/directories', media.addResource);

module.exports = router;