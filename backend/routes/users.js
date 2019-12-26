const express = require('express');
const users = express.Router();
const User = require('../models/User');
const auth = require('../auth/local');

User.hasMany('journals')
User.hasMany('dates', { through: 'journals'});
User.hasMany('questions', { through: 'journals' })
// User.hasMany('logs');
// User.testProto();

users.get('/', async (req, res) => {
    try {
        let users = await User.all();
        users = users.map(user => {
            delete user.password;
            return user;
        })
        res.status(200).json(users);
    } catch(err) {
        res.status(500).json({ status: 'error', err })
    }
});

// users.get('/:id', User.ensureAuthenticated, async (req, res) => {
//     try {
//         const user = await User.find(req.params.id);
//         delete user.password;
//         const dates = await user.dates();
//         const journals = await user.journals();
//         res.status(200).json({...user, dates, journals, status: 'success'});
//     } catch (err) {
//         res.status(500).json({ status: 'internal server error', err})
//     }
// });

users.get('/:id', async (req, res) => {
    try {
        const user = await User.find(req.params.id);
        delete user.password;
        const dates = await user.dates();
        const journals = await user.journals();
        const q = await user.questions();
        res.status(200).json({...user, dates, journals, q, status: 'success'});
    } catch (err) {
        res.status(500).json({ status: 'internal server error', err})
    }
});

// users.get('/info', User.ensureAuthenticated, async (req, res) => {
//     try {
//         const data = 
//     }
// })

users.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json({user});
    } catch (err) {
        res.status(500).json({status: 'error'});
    }
});

users.post('/register', async (req, res) => {
    try {
        const user = await User.createUser(req.body);
        delete user.password;
        const token = auth.encodeToken(user);
        res.status(200).json({...user, token, status: 'success'});
    } catch(err) {
        res.status(500).json({status: 'error', err})
    }  
});

users.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const {user,bool} = await User.checkUser(username, password);
    if (!bool) {
        res.status(500).json({status: 'invalid', err: user})
        return 'ayy lmao';
    }
    const dates = await user.dates();
    const journals = await user.journals();
    const q = await user.questions();
    const token = auth.encodeToken(user);
    delete user.password;
    res.status(200).json({status: 'success', dates, journals, q, token, ...user});
})

users.patch('/:id', User.ensureAuthenticated, async (req, res) => {
    const user = await User.find(req.params.id);
    res.status(200).json(await user.update(req.body));
});

users.delete('/:id', (req, res) => {
    res.json("nah we aint deleting rn");
});



module.exports = users;