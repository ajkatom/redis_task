const asyncRedis = require('async-redis');
const client = asyncRedis.createClient();

// client.on('error', function(err) {
//   console.log('Error ' + err);
// });

client.on('connect', () => {
  console.log(' redis server connected');
});

module.exports = client;
