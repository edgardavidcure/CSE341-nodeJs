const routes = require('express').Router();
const lesson1Controllers = require('../controllers/lesson1');

routes.get('/', lesson1Controllers.world);
routes.get('/earth', lesson1Controllers.earth);

module.exports = routes;
