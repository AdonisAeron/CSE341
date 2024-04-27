const express = require('express');
const routes = express.Router();
const dbController = require('../controllers/dbController');

routes.get('/', dbController.getData);

module.exports = routes;