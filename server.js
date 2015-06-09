var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('public'));
app.set('port', (process.env.PORT || 5000));

var sendLocation = {root: __dirname + '/public/'};

app.get('/', function(req, res) {
res.status(200).sendFile('index.html', sendLocation);
})

app.use(function(req, res) {
  res.status(404).sendFile('404.html', sendLocation);
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
