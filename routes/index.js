const routes = require('express').Router();
const controller = require('../controllers/controller');
 
routes.get('/', controller.sarahRoute);
routes.get('/hannah', controller.hannahRoute);
routes.get('/emily', controller.emilyRoute);

module.exports = routes;