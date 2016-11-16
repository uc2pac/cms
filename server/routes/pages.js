let pages = [{
    name: 'this is page 1'
}, {
    name: 'this is page 2'
}];

function get(req, res) {
    res.json(pages);
}

function create(req, res) {
    let page = {
        name: `this is page ${pages.length}`
    };

    pages.push(page);

    res.json(page);
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