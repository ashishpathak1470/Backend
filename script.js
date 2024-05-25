const express = require('express')
const app = express()

// middleware
app.use(function(req, res, next) {
    console.log("Welcome")
    next();
})


// routes
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/profile', function (req, res) {
    res.send('This is the profile page')
})

app.listen(3000)