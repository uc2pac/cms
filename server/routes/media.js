var express = require('express');
var router = express.Router();
var Uploader = require('../middleware/uploader');
var Media = require('../controllers/media');

// REST
/*  
resources
respurces/:id
resources/images
resources/images/:id
*/


// Media routes
router.get('/api/resources', Media.getResources)
    .post('/api/resources', Uploader.any(), Media.addResource)
    .get('/api/resources/images', Media.getImages);

module.exports = router;