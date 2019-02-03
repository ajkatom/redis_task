const app = require('./server/app');
const server = require('http').createServer(app);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`listening on port ${port}`));
