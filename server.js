var express = require('express');
var app = express();

app.disable('x-powered-by');

app.set('port',process.env.Port || 3000);

app.get('/', function(req,res){
    res.send("hello world");
});

app.listen(app.get('port'),function() {
    console.log("Application started on http://locahost:" + app.get('port') + ". Press Ctrl-C to terminate.");
});
