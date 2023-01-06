const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Matthew Santos');
});

module.exports = routes;
