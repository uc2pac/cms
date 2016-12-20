var mongoose = require('mongoose');
var options = {discriminatorKey: 'kind'};

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}, options);

module.exports = mongoose.model('File', fileSchema);