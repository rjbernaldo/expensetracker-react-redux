var path = require('path');
var express = require('express');

var bundlePath = path.join(__dirname, './dist/index.html');
var app = express();
var port = 8080;
  
app.use(express.static(__dirname + '/dist'));
app.get('*', function(req, res) {
  res.sendFile(bundlePath);
  //res.send('Hello world');
});

app.listen(port, function(err) {
  if (err) console.log(err);
  
  console.info(`Server listening on port ${port}`);
})
