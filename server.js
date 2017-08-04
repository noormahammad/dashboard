var express = require('express');
var app = express();

app.disable('x-powered-by');

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars',handlebars.engine);
app.set("view engine", 'handlebars');

app.use(express.static(__dirname + "/public"));

app.set('port',process.env.Port || 3000);

app.get('/', function(req,res){
    res.render("home");
});

app.listen(app.get('port'),function() {
    console.log("Application started on http://locahost:" + app.get('port') + ". Press Ctrl-C to terminate.");
});
