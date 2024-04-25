const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.sarahRoute);
routes.get('/hannah', lesson1Controller.hannahRoute);
routes.get('/emily', lesson1Controller.emilyRoute);

module.exports = routes;