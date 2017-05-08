//-- REQUIRES --//
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const promises = require('bluebird')

//-- LOCAL REQUIRES --//
require('./models/all')
const routes = require('./routes')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Connect to the database
mongoose.connect('mongodb://wine_tracker_db:27017/db')
// Use bluebird promises
mongoose.Promise = promises

// Mount the api sub app
app.use('/api', routes)

// Start listening on port 3000
app.listen(3000)