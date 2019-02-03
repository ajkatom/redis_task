const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const client = require('./redisClient');
// const redis = require('redis');
// const client = redis.createClient();

// const swaggerUi = require('swagger-ui-express'),
//   swaggerDocument = require('./swagger.json');
client;
app.use('/', express.static(path.join(__dirname + '/../dist')));
app.use('/dist', express.static(path.join(__dirname + '/../node_modules')));

app.use('/api', require('./api'));
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((err, req, res, next) => {
  const message = err.errors && err.errors[0].message;
  err.message = message || err.message;
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/api', router);

module.exports = app;
