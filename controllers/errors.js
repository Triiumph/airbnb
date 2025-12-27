// external modules
const path = require('path');

// internal modules
const rootDir = require('../utils/path') ;

exports.pageNotFound = (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
}