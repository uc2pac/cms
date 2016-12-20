var multer  = require('multer');

var storage = multer.diskStorage({
    destination: './media-library/',
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

module.exports = multer({storage: storage});