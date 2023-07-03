const mongoose = require('mongoose');

require('dotenv').config();

const db = () =>{
    mongoose.connect(process.env.MONGODB)
    .then((con)=>{console.log(`Connected to the database :${con.connection.host}`);})
    .catch((err)=>{console.log(`Error connecting to Mongo`);});
};

module.exports = db;