const express = require('express');
const bodyParser = require('body-parser');
 const dishRouter = express.Router();
 //dishrouter as express router

dishRouter.use(bodyParser.json());

dishRouter.route('/') // endpt as parameter / mount express router at /dishes endpt in index.js
// end pt means end pt at single location chaining all methos get,put etc at single location
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});

module.exports = dishRouter;