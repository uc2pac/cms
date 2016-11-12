var pages = require('./pages.js');


module.exports = function(req, res) {
    
    if (req.originalUrl.startsWith('/api/pages')) {
        pages(req, res);
    }
}