
exports.up = function(knex) {
    return knex.schema.createTable('logs', t => {
        t.increments('id');
        t.string('name');
        t.integer('user_id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('logs');
};
