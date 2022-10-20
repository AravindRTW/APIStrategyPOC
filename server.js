import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import * as dotenv from 'dotenv';
import Metadata from './HoundAPI/models/houndmodel.js';
import houndRoutes from './HoundAPI/routes/houndroutes.js';


  



  dotenv.config({path: './houndapi/hound.env'});
  const app = express(),
  port = process.env.PORT || 1992;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOINSTANCE); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
//   });



var routes = houndRoutes;
routes(app); //register the route


app.listen(port);


console.log('APIHound Server started on port: ' + port);