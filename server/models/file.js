var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var fileSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    path: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

var File = mongoose.model('File', fileSchema);

module.exports = File;