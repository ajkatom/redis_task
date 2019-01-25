const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const redis = require('redis');

app.use('/', express.static(path.join(__dirname + '/../dist')));
app.use('/dist', express.static(path.join(__dirname + '/../node_modules')));
app.use('/public', express.static(path.join(__dirname + '../public')));
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((err, req, res, next) => {
  const message = err.errors && err.errors[0].message;
  err.message = message || err.message;
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

module.exports = app;
