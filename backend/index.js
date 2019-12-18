const pry = require('pryjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./routes/users');
const journals = require('./routes/journals');
const questions = require('./routes/questions');
const dates = require('./routes/dates')
const express = require('express');
const port = 3000;
const app = express();
const User = require('./models/User');
const Base = require('knex-base');
const databaseSettings = require('./knexfile').development;
const knex = require('knex')(databaseSettings);

Base.establishConnection(knex);

app.use(bodyParser());
app.use(cors());

app.use('/slut', express.static('public'));
app.use('/users', users);
app.use('/journals', journals);
app.use('/questions', questions);
app.use('/date', dates);

app.get('/', (req, res) => {
    res.json(User.tableName);
});

// app.get('/slut', (req, res) => {
//     res.send('max is a lil slut');
// })

app.listen(port, () => console.log('listening at ', port));