var File = require('../models/file');
var CONFIG = require('../config');
var fs = require('fs');

function getBaseDirectories(req, res) {
    res.send({});
}

function addResource(req, res) {
    // TODO: investigate better way
    let path = `./fs${req.body.parent}/${req.body.name}`;
    let meta = {
        id: req.body.name,
        path: req.body.parent
    };

    makeDir(path, function() {
        saveMetadata(meta, function(result) {
            res.send(result);
        })
    })
}

function makeDir(path, cb) {
    fs.mkdir(path, function(err) {
        if (err && err.code !== 'EEXIST') throw err;
        cb();
    });
}

function saveMetadata(meta, cb) {
    var newFile = File(meta);

    newFile.save(function(err, file) {
        if (err) throw err;
        cb(file)
    });
}

module.exports = {
    getBaseDirectories: getBaseDirectories,
    addResource: addResource
};