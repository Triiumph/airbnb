// core modules
const path = require('path');
const rootDir = require('../utils/path');

// external module
const express = require('express');
const { registeredHome } = require('./host');
const userRouter = express.Router();
const homes = require('../controllers/homes');

// without using controllers

// // sending html for home page
// // __dirname is the path of current working directory
// userRouter.get("/", (req, res, next) => {
//   console.log(registeredHome);
//   // res.sendFile(path.join(rootDir, 'views', 'home.html')); 
//   res.render('home', {registeredHome: registeredHome}); //we have to pass key value pair, value is the name of the variable that we have to pass and key is with what varaible name you have to pass to use.ejs
//   // alternatively if you want to keep both names same you can do
//   // res.render('user', {registeredHome: {registeredHome}});
// })

// using controllers
userRouter.get('/', homes.homePage);

// home details page
userRouter.get("/host/home/:homeIdVariable", homes.getHomeDetails);

module.exports = userRouter; 
