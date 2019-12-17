
exports.up = function(knex) {
    return knex.schema.createTable('dates', t => {
        t.increments('id');
        t.string('date');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('dates');
};
