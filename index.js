const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

const lesson = require('./lesson_model')

app.use(express.json())
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.get('/lesson', (req, res) => {
    lesson.getLessons()
        .then(response => {
            console.log("resss:", response);

            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })


})


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})