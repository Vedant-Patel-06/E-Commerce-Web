const express = require('express');
const pro_router = require('./routes/productRoute');
const app = express();

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({path:"backend/.env"});
}

app.use(express.json());


app.use(pro_router);

module.exports = app;