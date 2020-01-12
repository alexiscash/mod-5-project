const express = require('express');
const dates = express.Router();
const Dates = require('../models/Date');

Dates.hasMany('journals')

dates.get('/', async (req, res) => {
    res.json(await Dates.all())
});

dates.get('/today', async (req, res) => {
    let today = new Date();
    const date = await Dates.findBy({date: today.getDate()})
    if (date) {
            res.status(200).json({date});
    } else {
        res.status(200).json(await Dates.create({date: today.getDate(), month: today.getMonth(), year: today.getFullYear()}))
    }
});

dates.get('/:id', async (req, res) => {
    const date = await Dates.find(req.params.id);
    const journals = await date.journals();
    res.json({...date, journals})
});

dates.post('/', async (req, res) => {
    res.json(await User.create(req.body));
});

dates.patch('/:id', async (req, res) => {
    const date = await Dates.find(req.params.id);
    res.json(await date.update(req.body));
})

dates.delete('/:id', async (req, res) => {
    res.json('nah fam we aint deleting rn')
})

module.exports = dates;