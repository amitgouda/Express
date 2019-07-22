/* const http = require('http'); */

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next();  //Allows the request to conntinue to the next middle ware
});

app.use((req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>Hello from express</h1>');
});

/* const server = http.createServer(app);

server.listen(3000);   */ 
app.listen(3000);
