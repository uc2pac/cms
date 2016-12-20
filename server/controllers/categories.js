var Category = require('../models/category');

var CategoryController = {

    read: function(req, res) {
        var params = req.params.id ? {
            '_id': req.params.id
        } : {};

        Category.find(params, function(err, categories) {
            if (err) throw err;

            res.json(categories);
        });
    },

    create: function(req, res) {
        var newCategory = Category({
            'title': req.body.title
        });

        newCategory.save(function(err, category) {
            if (err) throw err;

            res.json(category);
        });
    },

    update: function(req, res) {
        let id = req.params.id;
        let body = req.body.category;

        Category.findByIdAndUpdate(id, body, {new: true}, function(err, category) {
            if (err) throw err;

            res.send(category);
        });
    },

    remove: function(req, res) {
        let id = req.params.id;

        Category.findByIdAndRemove(id, function(err, category) {
            if (err) throw err;

            res.send({
                description: 'Category successfully deleted!'
            });
        });
    }
};

module.exports = CategoryController;