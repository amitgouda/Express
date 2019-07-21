const http = require('http');

//const routes = require('./routes');

const express = require('express');

const app = express();

//const server = http.createServer(app);

app.use((req, res, next) => { 
    console.log('In the middleware');
    next();
});

app.use((req, res, next) => {
    console.log('In the naothet middleware');
    res.send("<h1>Hey its me</h1>");
});

//console.log(routes.text)
//server.listen(3000);
app.listen(3000) 