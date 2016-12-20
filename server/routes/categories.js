var express = require('express');
var router = express.Router();
var Categories = require('../controllers/categories');

// Category Manager
router.get('/api/categories', Categories.read)
    .get('/api/categories/:id', Categories.read)
    .post('/api/categories', Categories.create)
    .put('/api/categories/:id', Categories.update)
    .delete('/api/categories/:id', Categories.remove);

module.exports = router;