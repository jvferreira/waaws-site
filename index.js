var express = require('express');
var app = express();
var port =  process.env.PORT || 7896;
app.use(express.static(__dirname+'/public'));

app.listen(port,function(){
  console.log('runnnig on http://localhost:'+port);
})
