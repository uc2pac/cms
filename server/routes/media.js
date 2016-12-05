var Resource = require('../models/resource');
var CONFIG = require('../config');
var fs = require('fs');

function getResources(req, res) {
    let path = req.query.path ? req.query.path : '';
    
    Resource.find({'path': path}, function(err, resources) {
        if (err) throw err;
        res.send(resources);
    });
}

function addResource(req, res) {
    console.log(req.headers);
    return;
    
    var newResource = Resource(req.body);

    newResource.save(function(err, resource) {
        if (err) throw err;
        res.send(resource);
    });
}

module.exports = {
    getResources: getResources,
    addResource: addResource
};