var mongoose = require('mongoose');
var File = require('./file');
var options = {discriminatorKey: 'kind'};

const imageSchema = new mongoose.Schema({
    size: {
        type: String
    },
    filename: {
        type: String,
        required: true
    }
}, options);

module.exports = File.discriminator('image', imageSchema);