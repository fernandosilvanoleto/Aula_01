const express = require('express');
const crypto = require('crypto');
const connection = require('./src/database/connection');
const routes = express.Router();

routes.get('/ongs', async (request, response) =>{
    const ongs = await connection('ongs').select('*');
    
    return response.json(ongs);
});

routes.post('/ongs', async (request, response) => {
    const data = request.body;

    console.log(data);
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        'name':"fernando",
        'email':"fernando@unitins.br",
        'whatsapp':"fernando_web",
        'city':"Miracema",
        'uf': "TO"
    })

    return response.json({
        evento: "Semana Teste 0.0.1",
        pessoa: "Fernando Silva Noleto"
    });
});

// exportando rotas, faz isso para outro arquivo conseguir ver
module.exports = routes;