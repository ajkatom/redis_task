const router = require('express').Router();
const client = require('../redisClient');

router.get('/', (req, res, next) => {
  async () => {
    const tasks = await client.lrange('tasks', 0, -1);
    console.log(tasks);
    res.send(tasks);
  };
});

module.exports = router;
