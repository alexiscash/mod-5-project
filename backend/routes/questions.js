const express = require('express');
const questions = express.Router();
const Question = require('../models/Question');

Question.belongsTo('log');

questions.get('/', async (req, res) => {
    res.json(await Question.all());
})

questions.get('/random', async (req, res) => {
    res.status(200).json(await Question.find(Math.floor(Math.random() * 32)))
})

questions.get('/:id', async (req, res) => {
    const q = await Question.find(req.params.id);
    const log = await q.log();
    res.json({...q, log})
})



questions.post('/', async (req, res) => {
    res.json(await Question.create(req.body));
})

questions.patch('/:id', async (req, res) => {
    const q = await Question.find(req.params.id);
    res.json(await q.update(req.body));
})

questions.delete('/:id', (req, res) => {
    res.json('nahh we aint deleting rn');
})

module.exports = questions;