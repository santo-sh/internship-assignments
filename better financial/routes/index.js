const express = require('express');
const bookRoute = require('./bookRoute');
const authorRoute = require('./authorRoute');
const app = express();

app.get('/', (req, res) => {
    res.json({status: true, message: "Hello form index.js"});
})
app.use('/books', bookRoute);
app.use('/authors', authorRoute);

module.exports = app;
