var express = require('express');
const movie = require('./model/movie');
var stud = require('./model/movie')
var route = express.Router();


route.get('/stud',async(req,res)=>{
  var imovie = await stud.find();
  res.send(imovie);

})
module.exports = route;