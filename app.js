var express = require('express'),
    exphbs  = require('express-handlebars');

var app = express();

// insertar las vistas con handlebar
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// route
app.get("/", function(req, res){
  res.render("home", {saludo: "hola diego achury"});
})

app.get("/:nombre", function(req, res){
  res.render("home", {nombre: req.params.nombre});
});

app.listen(8000);
