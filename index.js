var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));

//app.get('/',function(req,res) {
//	res.send('Hello World!')
//})

app.listen(port, function() {
  console.log('I am listening on port 3000!');
});