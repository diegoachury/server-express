var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    exphbs  = require('express-handlebars');

var app = express();

// The static middleware must come after the sass middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// insertar las vistas con handlebar
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// route
app.get("/", function(req, res){
  res.render("index");
})

app.get("/login", function(req, res){
  res.render("login");
});

app.listen(8000);
