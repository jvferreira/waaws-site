var express = require('express');
var app = express();
var port =  process.env.PORT || 7896;
var path = require('path');
var fs = require('fs');

app.use(express.static(__dirname+'/public'));

app.use(function(req, res, next){
  if(fs.existsSync(__dirname + '/public' + req.url + '.html')){
    res.redirect(301, req.url + '.html');
  }else{
    next();
  }
});

app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname+'/public/404-page-not-found.html');
});

app.listen(port,function(){
  console.log('runnnig on http://localhost:'+port);
});
