const express = require('express');
//third party module gets automatically from node modules
const http = require('http'); //core module
const morgan = require('morgan');
const hostname = 'localhost';
const port = 3000;

const app = express(); //application is gng to use express from node module 

app.use(morgan('dev')); //development version

app.use(express.static(__dirname + '/public'));
//serve html files from public folder(root for files dirname)

app.use((req, res, next) => {
//   console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});