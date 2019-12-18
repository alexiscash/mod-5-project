
exports.up = function(knex) {
    return knex.schema.createTable('questions', t => {
        t.increments('id');
        t.string('content');
        t.string('img_url').defaultTo('https://cdn.vox-cdn.com/thumbor/RlAwOw19UUtp3654kFrkg1CrvH8=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/16011248/Screen_Shot_2019_04_05_at_3.13.33_PM.png');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('questions');
};
