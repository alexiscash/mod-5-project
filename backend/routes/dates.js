const express = require('express');
const dates = express.Router();
const Date = require('../models/Date');

Date.hasMany('journals')

dates.get('/', async (req, res) => {
    res.json(await Date.all())
});

dates.get('/:id', async (req, res) => {
    const date = await Date.find(req.params.id);
    const journals = await date.journals();
    res.json({...date, journals})
});

dates.post('/', async (req, res) => {
    res.json(await User.create(req.body));
});

dates.patch('/:id', async (req, res) => {
    const date = await Date.find(req.params.id);
    res.json(await date.update(req.body));
})

dates.delete('/:id', async (req, res) => {
    res.json('nah fam we aint deleting rn')
})

module.exports = dates;