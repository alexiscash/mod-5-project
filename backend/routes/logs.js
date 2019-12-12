const express = require('express');
const logs = express.Router();
const Log = require('../models/Log');

Log.hasMany('questions');
Log.belongsTo('user');

logs.get('/', async (req, res) => {
    res.json(await Log.all());
})

logs.get('/:id', async (req, res) => {
    const log = await Log.find(req.params.id);
    const user = await log.user()
    const questions = await log.questions();
    res.json({...log, user, questions})
})

logs.post('/', async (req, res) => {
    res.json(await Log.create(req.body));
})

logs.patch('/:id', async (req, res) => {
    const log = await Log.find(req.params.id);
    res.json(await log.update(req.body));
})

logs.delete('/:id', async (req, res) => {
    const log = await Log.find(req.params.id);
    log.delete();
    res.json('deleted');
})


module.exports = logs;