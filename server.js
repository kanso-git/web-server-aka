var PORT = 3000;
var express = require('express');
var app = express();
var middleware = require('./middleware.js');

app.use(middleware.logger);
//tell express about our static folder
app.use(express.static(__dirname + '/public'));

app.get('/about', function(req, res) {
    res.send('hello world');
});

app.get('/secret',middleware.requiredAuthentication, function(req, res) {
    res.send('hello world');
});

app.listen(PORT, function() {
    console.log("Our server is up an runing on port:" + PORT);
});