const express = require('express');
const bodyParser = require ('body-parser');
const mongodb = require ("./db/contacts")

const port = process.env.PORT || 8080;
const app = express();

mongoClient = require ("mongodb");


app
.use(bodyParser.json())
.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Orgin", "*");
    next();
})
.use('/', require('./routes'))


mongodb.initDb((err, mongodb) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DC and listening on ${port}`);
    }
});