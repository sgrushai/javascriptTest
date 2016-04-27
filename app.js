var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(path.join(__dirname, '/bower_components')));

app.get('/angular', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/pages/angular.html'));
});
app.get('/react', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/pages/react.html'));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/pages/javascript.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});