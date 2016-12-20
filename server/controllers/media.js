var Resource = require('../models/files/file');
var Image = require('../models/files/image');
var CONFIG = require('../config');
var fs = require('fs');

var MediaController = {

    getResources: function(req, res) {
        let path = req.query.path ? req.query.path : '';
        
        Resource.find({'path': path}, function(err, resources) {
            if (err) throw err;
            res.send(resources);
        });
    },

    addResource: function(req, res) {
        if (req.files) {
            addFile(req, res);
        } else {
            addFolder(req, res);
        }
    },

    getImages: function(req, res) {
        let limit = +req.query.limit,
            skip  = +req.query.skip;

        Image.find().
            limit(limit).
            skip(skip).
            exec(function(err, images) {
                if (err) throw err;
                Image.count().exec(function(err, count) {
                    if (err) throw err;

                    res.status(200).send({
                        images: images,
                        count: count
                    });
                });
            });
    }
};

function addFile(req, res) {
    var file = req.files[0];

    var newImage = new Image({
        name: file.originalname, 
        path: req.body.path,
        size: file.size,
        filename: file.filename
    });

    newImage.save(function(err, image) {
        if (err) throw err;
        res.send(image);
    });
}

function addFolder(req, res) {
    var resource = new Resource(req.body);
    
    resource.save(function(err, resource) {
        if (err) throw err;
        res.send(resource);
    });
}

module.exports = MediaController;