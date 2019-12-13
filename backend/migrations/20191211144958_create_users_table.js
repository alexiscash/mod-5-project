
exports.up = function(knex) {
    return knex.schema.createTable('users', (t) => {
        t.increments('id');
        t.string('firstName');
        t.string('lastName');
        t.integer('age');
        t.string('bio').defaultTo('sad boi');
        // t.unique('email');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
