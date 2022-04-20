const dotenv = require("dotenv");
const express = require('express')
const mongoose = require('mongoose');

dotenv.config({
    path: "../config/.env"
});

// const DB = "mongodb://localhost:27017/updown";
const DB = 'mongodb+srv://sandeep:5ezO3gutGKB02WEs@cluster0.2xwjp.mongodb.net/updown?retryWrites=true&w=majority';

const connectDatabase = () => {
    mongoose.connect(DB, { useNewUrlParser: true })
        .then((data) => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        })
        .catch((err) => {
            console.log(err);
        });
};


module.exports = connectDatabase;