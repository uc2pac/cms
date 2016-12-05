var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var fileSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    path: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

var File = mongoose.model('File', fileSchema);

module.exports = File;