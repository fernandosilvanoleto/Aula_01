//método up é responsável pela criação das tabelas
exports.up = function(knex) {
   return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullabe();
        table.string('email').notNullabe();
        table.string('whatsapp').notNullabe();
        table.string('city').notNullabe();
        table.string('uf', 2).notNullabe();
   });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
