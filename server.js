var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(80, function () {
  console.log('Chatnon started on port 80');
});
