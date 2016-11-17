var Page = require('../models/page');

function get(req, res) {
    var query = req.query.id ? {
        '_id': req.query.id
    } : {};

    Page.find(query, function(err, pages) {
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
    console.log('update pages');
}

function remove(req, res) {
    console.log('delete pages');
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
    create: create
};