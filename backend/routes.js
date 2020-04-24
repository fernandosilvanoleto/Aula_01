const express = require('express');
const OngController = require('./src/controllers/OngController');
const IncidentController = require('./src/controllers/IncidentController');
const ProfileController = require('./src/controllers/ProfileController');
const Sessionontroller = require('./src/controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', Sessionontroller.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('incidents/:id', IncidentController.delete);

// exportando rotas, faz isso para outro arquivo conseguir ver
module.exports = routes;