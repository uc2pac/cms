var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var pageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: String,
    base_image: {
        type: String,
        default: 'placeholder171x180.svg'
    },
    category: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: Date
});

var Page = mongoose.model('Page', pageSchema);

module.exports = Page;