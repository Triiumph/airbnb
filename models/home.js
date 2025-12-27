// importing core modules
const fs = require('fs');
const path = require('path');

// importing internal module
const rootDir = require('../utils/path');
const { error } = require('console');

// fake database
let registeredHome = []; //array of class object

const HomeDataPath = path.join(rootDir, 'data', 'homes.json');

exports.Home = class Home{
  constructor(houseName){
    this.houseName = houseName;
  }

  // defining function, this is shortcut way to define function of ecma script
  save() {
    registeredHome.push(this);  

    // saving to the local file as well
    fs.writeFile(HomeDataPath, JSON.stringify(registeredHome), error => {
      console.log("File Writing Over", error);
    });
  }

  // static functions are those functions that are not related to object but the class itself
  static fetchAll(callback) { //read file is async opn so call this fn after reading is done
    // usign file read write
    fs.readFile(HomeDataPath, (err, data) => {
      console.log("File read: ", err, data);
      if(err){
        registeredHome = [];
         callback(registeredHome);
      }
      else{
        registeredHome = (data.length > 0) ? JSON.parse(data) : [];
        callback(registeredHome);
      }
    })

    // not using file read write 
    // return registeredHome;
  }
}