const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// import our local files
const routes = require('./routes/routes');


// create our express app
const app = express();

// view engine setup
app.engine('pug', require('pug').__express)

app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too


// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

// enable cors
app.use(cors())

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());


// static files
app.use("/static", express.static(path.join(__dirname, "public")));

// use our routes
app.use('/', routes);


module.exports = app ;