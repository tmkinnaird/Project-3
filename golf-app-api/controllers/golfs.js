const express = require('express');
const golfs = express.Router();
const Golf = require('../models/golfSchema.js');

//Index

golfs.get('/', async (req, res) => {
    try {
        const foundGolfs = await Golf.find({});
        res.status(200).json(foundGolfs);
    }catch (error){
        res.status(400).json(error);
    }
});

// Delete

golfs.delete('/:id', async (req, res) => {
    try {
        const deletedGolfs = await Golf.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedGolfs);
    } catch (error) {
        res.status(400).json(error)
    }
})

//Update

golfs.put('/:id', async (req, res) => {
    try {
        const updatedGolfs = await Golf.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedGolfs);
    } catch (error) {
        res.status(400).json(error);
    }
})

//Create

golfs.post('/', async (req, res) => {
    let date = req.body.date
    // date = date.toLocaleDateString("en-US")
    // console.log(req.body)
    try {
        const createdGolfs = await Golf.create(req.body);
        res.status(200).json(createdGolfs);
    }catch (error) {
        res.status(400).json(error);
    }
});


module.exports = golfs;