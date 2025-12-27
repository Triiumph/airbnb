const rootDir = require('../utils/path');
const path = require('path');
const {Home} = require('../models/home');

// host router
exports.addHomeGet = (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
}

// const registeredHome = [];
exports.addHomePost = (req, res, next) => {
  console.log('this is get request for add home');
  console.log(req.body.houseName);
  
  // without using models directory
  // registeredHome.push({houseName: req.body.houseName});
  
  // usign models directory
  const hm = new Home(req.body.houseName);
  hm.save();

  res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'))
}

// userRouter
exports.homePage = (req, res, next) => {
  // not using file read write
  // const registeredHome2 = Home.fetchAll();
  Home.fetchAll((dta) => {
    res.render('home', {registeredHome: dta});
  })

  // using file read write with callback since file read is async fn

  // console.log(registeredHome2);
  // res.sendFile(path.join(rootDir, 'views', 'home.html')); 
  // for dynamic ui using ejs (it will look for home.ejs in view folder, we already set it in app,js)
  // res.render('home', {registeredHome: registeredHome2}); //we have to pass key value pair, value is the name of the variable that we have to pass and key is with what varaible name you have to pass to use.ejs
  // alternatively if you want to keep both names same you can do
  // res.render('home', {registeredHome2});

}

// variable (without using models folder)
// exports.registeredHome = registeredHome;


exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeIdVariable;
  res.send("you are on details page");
}
