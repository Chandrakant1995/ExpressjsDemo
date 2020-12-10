var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Welcome to JavaTpoint');
    //console.log(req.accepts('text/html'));
    // console.log(req.is('html'));
    // console.log(req.is('text/html'));
    // console.log(req.is('text/*'));
    // ?name=sasha  
    //req.param('name')  
    console.log(req.param('name'));
    console.log();
    console.log();


})
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})  