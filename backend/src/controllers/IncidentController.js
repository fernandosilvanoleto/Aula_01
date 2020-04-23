const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const incidents = await connection('incidents').select('*');

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

       const [id] = await connection('incidents').insert({
            'title':"Caso 1",
            'description':"Caso teste 1",
            'value':100,
            'ong_id': "5c824d71",
        });
        return response.json({ id });
    }
};