//-- REQUIRES --//
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Defnie our 'batch' object
const Batch = new Schema({
    name: { type: String, required: true },
    specgrav: { type: Array, default: [] },
    temps: { type: Array, default: [] },
    dates: { type: Array, default: [] }
})

module.exports = mongoose.model('Batch', Batch)