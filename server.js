var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('public'));

//Serves all the request which includes /images in the url from Images folder
app.use('/img', express.static(__dirname + '/img'));
app.use('/JSON', express.static(__dirname + '/JSON'));

var server = app.listen(8080)
