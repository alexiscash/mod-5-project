
exports.up = function(knex) {
    return knex.schema.createTable('users', (t) => {
        t.increments('id');
        t.string('username');
        t.string('firstName');
        t.string('lastName');
        t.string('email'); // unique
        t.string('password'); // encrypted
        t.integer('age');
        t.string('bio').defaultTo('sad boi');
        t.boolean('admin').defaultTo(false);
        // t.unique('email');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
