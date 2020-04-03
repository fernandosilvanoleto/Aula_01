const express = require('express');

const app = express();

/**
 * ROTA / RECURSO
 */

 /**
  * MÉTODOS HTTP
  * 
  * GET: Buscar/listar uma informações do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informaçãoo do back-end
  */

  /**
   * Tipos de parâmetors
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (servem para filtro, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos "/:Id"
   * Request Params: Corpo da requisição, utilizado para criar ou alterar recurso
   */

app.get('/users', (request, response) => {
    return response.json({
        evento: "Semana Teste 0.0.0",
        pessoa: "Fernando Silva Noleto"
    });
});

app.listen(3333); //acessar através do ip do navegador

