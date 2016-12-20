var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var categorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: String,
    base_image: {
        type: String
    },
    parent_category: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: Date
});

var Category = mongoose.model('Category', categorySchema);

module.exports = Category;