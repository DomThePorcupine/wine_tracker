const express = require('express')
const admin = express()

admin.get('/', async (req, res) => {
    res.send('Hello, World!')
})

module.exports = admin