var express = require('express'),
    routes = require('./routes');

var app = express();

// Middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.get('Origin') || '*');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // Required for Angular Http 2.1
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
    next();
});

app.get('/', function (req, res) {
    res.send('Ramen Mock Backend. Please use api/endpoint to access JSON data');
});

// Routes
app.use('/api', routes);

app.listen(3333, function() {
    console.log('Application is running on port 3333');
});