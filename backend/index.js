const pry = require('pryjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./routes/users');
const logs = require('./routes/logs')
const questions = require('./routes/questions')
const express = require('express');
const port = 3000;
const app = express();

app.use(bodyParser());
app.use(cors());

app.use('/users', users);
app.use('/logs', logs);
app.use('/questions', questions);

app.get('/', (req, res) => {
    res.json('ayyy lmao');
});

app.listen(port, () => console.log('listening at ', port));