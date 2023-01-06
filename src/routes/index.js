const routes = require('express').Router();
const dataDisplay = require('../controller');

routes.get('/', dataDisplay.displayData);

routes.get('/', (req, res) => {
  res.send('Matthew Santos');
});

module.exports = routes;
