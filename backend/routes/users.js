const express = require('express');
const users = express.Router();
const User = require('../models/User');


User.hasMany('logs');
// User.testProto();

users.get('/', async (req, res) => {
    res.json(await User.all());
});

users.get('/:id', async (req, res) => {
    // User.testProto();
    const user = await User.find(req.params.id);
    const logs = await user.logs();
    res.json({...user, logs});
    // res.json(logs)

})

users.post('/', async (req, res) => {
    res.json(await User.create(req.body));
    // res.json('ayyy lmao')
});

users.patch('/:id', async (req, res) => {
    const user = await User.find(req.params.id);
    res.json(await user.update(req.body));
});

users.delete('/:id', (req, res) => {
    res.json("nah we aint deleting rn")
})



module.exports = users;