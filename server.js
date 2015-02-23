var express = require('express'),
  app       = express(),
  port      = process.env.PORT || 3002;

app.use(express.static(__dirname + '/build'));

app.listen(port, function(){
  console.log('listening on port ' + port);
})

