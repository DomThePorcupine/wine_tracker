// This is simply a wrapper to export all our desired models
// doing it this way makes including models more modular

//-- REQUIRES --//
const mongoose = require('mongoose')

const Batch = require('./batch')

module.exports = {
  Batch: Batch
}