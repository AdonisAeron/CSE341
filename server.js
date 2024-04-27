// express web server
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb');
const mongodb = require('./DB/Connection');


const index = require('./routes/index');
const professional = require('./routes/professional');

const port = process.env.PORT || 8080;
const app = express();

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        next();
    })
    .use('/', index)
    .use('/professional', professional)
    
mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connted to the DB and listening on port ${port}`)
    }
})

//app.listen(port, console.log(`launched app and listening on port ${port}`));