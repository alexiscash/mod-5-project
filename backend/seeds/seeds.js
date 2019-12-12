
exports.seed = async (knex) => {
  await knex('users').del();
  await knex('logs').del();
  await knex('questions').del();

  await knex('users').insert([
    { id: 1, firstName: 'alexis', lastName: 'rangel', age: 21 },
    { id: 2, firstName: 'steven', lastName: 'nguyen', age: 30 },
    { id: 3, firstName: 'max', lastName: 'bitch', age: 4 }
  ]);

  await knex('logs').insert([
    { id: 1, name: 'ayy lmao', user_id: 1 },
    { id: 2, name: "don't even say nothing to me boi you look like a muhhfucking uhhh", user_id: 1 },
    { id: 3, name: 'swag on infinity', user_id: 2 }
  ]);

  await knex('questions').insert([
    { id: 1, content: 'is it still me that makes you sweat', log_id: 1 },
    { id: 2, content: 'am i who you think about in bed', log_id: 2 },
    { id: 3, content: 'when the lights are dim', log_id: 3 }
  ])
}
