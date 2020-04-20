const express = require('express');

const routes = express.Router();

routes.get('/users', (request, response) => {
    return response.json({
        evento: "Semana Teste 0.0.1",
        pessoa: "Fernando Silva Noleto"
    });
});

// exportando rotas, faz isso para outro arquivo conseguir ver
module.exports = routes;