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
            'title':"Caso 2 - Fernando",
            'description':"Caso teste 2 - Ceulp/Ulbra",
            'value':100,
            'ong_id': "5c824d71",
        });
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = response.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        
        if (incident.ong_id != ong_id){
            return response.status(401).json({error: 'Operation not permitted'});
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};