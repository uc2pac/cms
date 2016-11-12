var express = require('express'),
    routes = require('./routes');

var app = express();

app.get('/', function (req, res) {
    res.send('Ramen Mock Backend. Please use api/endpoint to access JSON data');
});

// Routes
app.use('/api', routes);

app.listen(3333, function() {
    console.log('Application is running on port 3333');
});