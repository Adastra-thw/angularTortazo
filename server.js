'use strict';

var express = require('express');
var app = express();

app.configure(function () {
  //app.use(express.basicAuth('adastra', 'adastra'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/app'));
  app.use(function (req, res, next) {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'get,post,GET,POST');
    //res.header('access-control-allow-headers', 'content-type, authorization, x-requested-with');

    if (['OPTIONS', 'options'].indexOf(req.method) > -1) {
      res.send(200);
    } else {
      next();
    }
  });
});

require('./routes')(app);

var port = 3000;
app.listen(port, function () {
  console.log('http://localhost:' + port);
});
