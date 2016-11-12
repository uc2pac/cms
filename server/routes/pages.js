function get(req, res) {
    console.log('get pages');
}

function create(req, res) {
    console.log('create pages');
}

function update(req, res) {
    console.log('update pages');
}

function remove(req, res) {
    console.log('delete pages');
}

module.exports = function(req, res) {
    var originalUrl = req.originalUrl;
    
    switch(req.originalUrl) {
        case '/api/pages.get':
            get(req, res);
            break;
        case '/api/pages.post':
            create(req, res);
            break;
        case '/api/pages.update':
            update(req, res);
            break;
        case '/api/pages.delete':
            remove(req, res);
            break;

        // default:
            // default code block
    }
};