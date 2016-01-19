'use strict';
const __config = require('./src/config');

const express = require('express');
const bodyParser = require('body-parser');

let app = express();

// Enables CORS
let enableCORS = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers',
  'Content-Type, Authorization, Content-Length, X-Requested-With, *');

  next();
};

app
  .use(enableCORS)
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(bodyParser.json())

  // .use('/assets', express.static(path.join(__dirname, 'assets')))
  .use('/hello', (req, res) => {
    return res.send('Hello world!!!');
  });

app.set('port', __config.main.port || process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log(`Node app listening at ${__config.main.siteUrl}
    with NodeJS ${process.version}`);
});
