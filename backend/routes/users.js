const express = require('express');
const users = express.Router();
const User = require('../models/User');

User.hasMany('journals')
User.hasMany('dates', { through: 'journals'});
// User.hasMany('logs');
// User.testProto();

users.get('/', async (req, res) => {
    const users = await User.all();
    console.log(users);
    const arr = users.map(async (user) => {
        const journals = await user.journals();
        return {...user, journals}
    })
    // res.json(await User.all());
    res.json(arr);
});

users.get('/:id', async (req, res) => {
    // User.testProto();
    const user = await User.find(req.params.id);
    const dates = await user.dates();
    const journals = await user.journals();

    res.json({...user, dates, journals});
    // res.json(User.hasMany('logs', { through: 'questions' }));
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