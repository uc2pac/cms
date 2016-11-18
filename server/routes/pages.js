var Page = require('../models/page');

function get(req, res) {
    var params = req.params.id ? {
        '_id': req.params.id
    } : {};

    Page.find(params, function(err, pages) {
        if (err) throw err;

        res.json(pages);
    });
}

function create(req, res) {
    createPage(req.body.title, function(page) {
        res.json(page);
    });
}

function update(req, res) {
    let id = req.params.id;
    let body = req.body.page;

    Page.findByIdAndUpdate(id, body, {new: true}, function(err, page) {
        if (err) throw err;

        res.send(page);
    });
}

function remove(req, res) {
    let id = req.params.id;

    Page.findByIdAndRemove(id, function(err, page) {
        if (err) throw err;

        res.send({
            description: 'Page successfully deleted!'
        });
    });
}

function createPage(title, cb) {
    var newPage = Page({
        'title': title
    });

    newPage.save(function(err, user) {
        if (err) throw err;

        cb(user)
    });
}

module.exports = {
    get: get,
    create: create,
    update: update,
    remove: remove
};