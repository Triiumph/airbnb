const rootDir = require('../utils/path');
// core modules
const path = require('path');

const express = require('express');
const hostRouter = express.Router();
const homes = require('../controllers/homes');

// without using controller

// hostRouter.get("/host/add-home", (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
// })

// // making an array of objects or map befor this post api to store the house name
// const registeredHome = [];

// hostRouter.post("/host/add-home", (req, res, next) => {
//   console.log('this is get request for add home');
//   console.log(req.body.houseName);
//   registeredHome.push({houseName: req.body.houseName});
//   res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'))
// })

// // this is for single export
// // module.exports = hostRouter;

// // for multiple exports we have to do the following
// exports.hostRouter = hostRouter;
// exports.registeredHome = registeredHome;

// // now the wherever we are importing this host router we need to destructure
// // as we are now exporting 2 objects 

// using controllers
hostRouter.get('/host/add-home', homes.addHomeGet);
hostRouter.post('/host/add-home', homes.addHomePost);

exports.hostRouter = hostRouter;