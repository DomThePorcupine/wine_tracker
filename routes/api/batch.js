//-- REQUIRES --//
const express = require('express')
const batch = express()

const mongoose = require('mongoose')
const Batch = mongoose.model('Batch')

// Return list of current batch names
batch.get('/', async (req, res) => {
    const batches = await Batch.find({}, 'name')
    res.send(batches)
})

// Return specific information about a batch
batch.get('/:id', async (req, res) => {
    const batches = await Batch.findById(req.params.id)
    res.send(batches)
})

// Create a new batch
batch.post('/', async (req, res) => {
    // TODO check if name was given in the post request
    const nBatch = new Batch({name : req.body.name})
    await nBatch.save()
    res.send(nBatch)
})

module.exports = batch