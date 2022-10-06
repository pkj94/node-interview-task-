const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
mongoose.connect('mongodb://localhost:27017/interviewDb').then(() => {
    const app = express();
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', '*');
        next();
    });
    app.use('',routes)
    app.listen(4000, () => {
        console.log('Service started on port: 4000')
    })
}).catch(err => {
    console.log('DB not connected', err);
});
