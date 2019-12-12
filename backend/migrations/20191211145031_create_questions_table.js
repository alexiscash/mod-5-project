
exports.up = function(knex) {
    return knex.schema.createTable('questions', t => {
        t.increments('id');
        t.string('content');
        t.integer('log_id');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('questions');
};
