var express = require('express');
var bodyParser = require('body-parser');
var port='3000';

var app = module.exports= express();

app.listen(port); //faz a aplicacao rodar pega a porta e roda no local host

app.use(bodyParser.urlencoded({encoded:true}));
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.setHeader('Access-control-Allow-origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Authorization');
    next();
})