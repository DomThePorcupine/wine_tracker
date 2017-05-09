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

// TODO: This is ugly, I need to fix this
// Update an existing batch
batch.put('/:id', async (req, res) => {
    // TODO: check key so friends won't mess with me
    const tBatch = await Batch.findById(req.params.id)
    const nDate = req.body.date
    const nSpecG = req.body.specg
    const nTemp = req.body.temp
    tBatch.dates.push(nDate)
    tBatch.temps.push(nTemp)
    tBatch.specgrav.push(nSpecG)
    await tBatch.save()
    res.send(tBatch)
})

// Delete an existing batch
batch.delete('/:id', async (req, res) => {
    await Batch.findByIdAndRemove(req.params.id)
    res.sendStatus(202)
})

// Create a new batch
batch.post('/', async (req, res) => {
    // TODO check if name was given in the post request
    const nBatch = new Batch({name : req.body.name})
    await nBatch.save()
    res.send(nBatch)
})

module.exports = batch