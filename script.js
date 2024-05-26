const express = require('express')
const app = express()

// middleware
app.use(function(req, res, next) {
    console.log("Welcome")
    next();
})

// static files
app.use(express.static('./public'));

app.use(function(req, res, next){
  console.log("This is the middleware")
  next();
})

// template engine
app.set("view engine", "ejs");

// routes
app.get('/', function (req, res) {
  res.render('index', {age :12})
})

app.get('/contact', function (req, res) {
  res.render('contact', {name : "ashish"})
})





app.get('/profile', function (req, res) {
    res.send('This is the profile page')
})

// dynamic routes
app.get('/profile/:username', function (req, res) {
  res.send(`This is the ${req.params.username} profile`)
})


app.listen(3000)