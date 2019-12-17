
exports.up = function(knex) {
    return knex.schema.createTable('journals', t => {
        t.increments('id');
        t.string('name');
        t.integer('date_id');
        t.integer('user_id')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('journals');
};
