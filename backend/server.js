
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const wildcard = require('@wildcard-api/server/express'); // npm install @wildcard-api/server


const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.APP_SERVER_PORT || 8000;

app.use(bodyParser.json());


// We install the Wildcard middleware
app.use(wildcard(getContext));

// `getContext` is called on every API request. It defines the `context` object.
// `req` is Express' request object
async function getContext(req) {
    const context = {};
    console.log("salut");
    console.log(req);
    // Authentication middlewares usually make user information available at `req.user`.
    context.user = req.user;
    return context;
}


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

//app.use(express.static(__dirname+'/../wildcard-front/build/'));
//app.use(express.static(path.join(__dirname, 'frontend/build')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/../wildcard-front/build/index.html'));
// });

mongoose.connect(
    process.env.DB_CONNECTION,
).then(() => {
    console.log('application connecté sur le port ' + port);
    app.listen(port);
}).catch((err) => {
    console.log(err);
});
