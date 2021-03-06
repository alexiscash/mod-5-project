
exports.up = function(knex) {
    return knex.schema.createTable('journals', t => {
        t.increments('id');
        t.integer('user_id');
        t.integer('date_id');
        t.integer('question_id');
        t.integer('score');
        t.boolean('affirmative');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('journals');
};
