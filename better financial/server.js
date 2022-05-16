const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const baseRoute = require('./routes')


const app = express()
app.use(express.json())
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
app.use('/', baseRoute);


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at port:${process.env.PORT}`);
});