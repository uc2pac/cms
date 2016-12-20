var express = require('express');
var router = express.Router();
var Pages = require('../controllers/pages');

// Page Manager
router.get('/api/pages', Pages.get)
    .get('/api/pages/:id', Pages.get)
    .post('/api/pages', Pages.create)
    .put('/api/pages/:id', Pages.update)
    .delete('/api/pages/:id', Pages.remove);

module.exports = router;