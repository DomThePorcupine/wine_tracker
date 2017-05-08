// express requires
const express = require('express')
const app = express()

// All our different endpoints
const admin = require('./admin')
const batch = require('./batch')

// Attach them to our express app
app.use('/admin', admin)
app.use('/batch', batch)


// Export the result
module.exports = app