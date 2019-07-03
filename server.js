var express = require('express');
var mysql = require('mysql');
var bodyParser =require('body-parser');
var exphbs  = require('express-handlebars');
var PORT = process.env.PORT || 3000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
var routes = require('./controllers/burgers_controller');
app.use(routes);

app.listen(PORT,function(){
    console.log('app listining port: '+ PORT)
})