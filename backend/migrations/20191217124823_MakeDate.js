
exports.up = function(knex) {
    return knex.schema.createTable('dates', t => {
        t.increments('id');
        t.integer('date');
        t.integer('month');
        t.integer('year');
        t.timestamp('created_at').defaultTo(knex.fn.now())
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('dates');
};
