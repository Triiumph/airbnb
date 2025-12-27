// core modules
const path = require('path');

// external module
const express = require('express');

// internal/local modules
const {hostRouter} = require('./routes/host'); //destructuring as more then 1 export
const userRouter = require('./routes/user');
const rootDir = require('./utils/path');
const errors = require('./controllers/errors');

// defining the app
const app = express();
// setting templating engine for the app for dynamic UI
app.set('view engine', 'ejs');
// set the folder containing the html files (set the value for views)
app.set('views', 'views');

// handles data chnks and stream buffering
app.use(express.json());
// formats the data to right format it has & and all
app.use(express.urlencoded());

// adding middleware to make static files accessible
app.use(express.static(path.join(rootDir, 'public')));

// custom middleware to log the request each time a new endpoint is hit on the front end
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
})

// handling without routes folder - sending html for home page
  // app.get("/", (req, res, next) => {
  //   res.send(

  //     `<h1>welcome to airbnb</h1>
  //     <a href="/add-home">Add Home</a>`
  //   );
  //   // next();
  // })

// handling with routes folder
app.use(userRouter);
app.use(hostRouter);

// handling 404 request, explicitly
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

// handling 404 request with conroller
app.use(errors.pageNotFound);

const PORT = 3000 ;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
})