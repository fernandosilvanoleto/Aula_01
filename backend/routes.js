const express = require('express');
const OngController = require('./src/controllers/OngController');
const IncidentController = require('./src/controllers/IncidentController');
const routes = express.Router();

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);

// exportando rotas, faz isso para outro arquivo conseguir ver
module.exports = routes;