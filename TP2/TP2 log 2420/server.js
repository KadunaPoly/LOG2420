/*var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/TP2.html', 'utf8');
    myReadStream.pipe(res);
    
    
  });
server.listen(8080, '127.0.0.1');
console.log('listening to port 8080');*/
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/TP2.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/output.json'));
});

app.use(express.static('public'));
 
//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/json', express.static(__dirname + '/public/JSON'));

var server = app.listen(8080, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});


