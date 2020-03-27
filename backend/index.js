const express = require('express');

const app = express();

app.get('/', (request, response) =>{
    return response.json({
        evento: "Semana Teste 0.0.0",
        pessoa: "Fernando Silva Noleto"
    });
});

app.listen(3333); //acessar através do ip do navegador


