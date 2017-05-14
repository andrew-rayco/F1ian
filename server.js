var path = require('path')

var express = require('express')
var hbs = require('express-handlebars')

var routes = require('./routes')

var app = express()


// Middleware
app.engine('hbs', hbs({
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// Routes
app.use('/', routes)


module.exports = function(db) {
  app.set('db', db)
  return app
}
