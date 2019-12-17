const express = require('express');
const journals = express.Router();
const Journal = require('../models/Journal');

Journal.hasMany('questions');
Journal.belongsTo('user');

journals.get('/', async (req, res) => {
    res.json(await Journal.all());
})

journals.get('/:id', async (req, res) => {
    const journal = await Journal.find(req.params.id);
    const user = await journal.user()
    const questions = await Journal.questions();
    res.json({...journal, user, questions})
})

journals.post('/', async (req, res) => {
    res.json(await Journal.create(req.body));
})

journals.patch('/:id', async (req, res) => {
    const journal = await Journal.find(req.params.id);
    res.json(await Journal.update(req.body));
})

journals.delete('/:id', async (req, res) => {
    const journal = await Journal.find(req.params.id);
    journal.delete();
    res.json('deleted');
})


module.exports = journals;