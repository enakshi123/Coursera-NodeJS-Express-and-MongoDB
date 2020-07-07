const express = require('express');
//third party module gets automatically from node modules
const http = require('http'); //core module
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter=require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = express(); //application is gng to use express from node module 

app.use(morgan('dev')); //development version
app.use(bodyParser.json());
app.use('./dishes',dishRouter); //moount to end pt
//any req coming to /dishes will be handled by dishRouter



// app.all('/dishes',(req,res,next) =>{
// //callback fxn handles the incoming reqs and all is by default for any req
// res.statusCode=200;
// res.setHeader('Content-Type','text/plain'); //res to the client in plain text
// next(); //additional functionalities with /dishes end point

// });
// app.get('/dishes',(req,res,next) =>{

//   res.end('Will send all the dishes to you!');
// });

// app.post('/dishes', (req, res, next) => {
//   res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description); //body of post req message
//  });
 
//  app.put('/dishes', (req, res, next) => {
//    res.statusCode = 403;
//    res.end('PUT operation not supported on /dishes');
//  });
  
//  app.delete('/dishes', (req, res, next) => {
//      res.end('Deleting all dishes');
//  });
 
//  app.get('/dishes/:dishId', (req,res,next) => {
//      res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
//  });
 
//  app.post('/dishes/:dishId', (req, res, next) => {
//    res.statusCode = 403;
//    res.end('POST operation not supported on /dishes/'+ req.params.dishId);
//  });
 
//  app.put('/dishes/:dishId', (req, res, next) => {
//    res.write('Updating the dish: ' + req.params.dishId + '\n');
//    res.end('Will update the dish: ' + req.body.name + 
//          ' with details: ' + req.body.description);
//  });
 
//  app.delete('/dishes/:dishId', (req, res, next) => {
//      res.end('Deleting dish: ' + req.params.dishId);
//  });
 



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