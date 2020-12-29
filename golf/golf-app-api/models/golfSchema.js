const { Schema, model } = require('mongoose');
// const golfs = require('../controllers/golfs');

const golfsSchema = Schema({
    name: {type:String, required: true},
    url: {type:String},
    score: {type:Number},
    location: {type:String}
})

module.exports = model('Golf', golfsSchema)