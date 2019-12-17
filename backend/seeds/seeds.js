
exports.seed = async (knex) => {
  await knex('users').del();
  await knex('journals').del();
  await knex('questions').del();

  await knex('dates').insert([
    { id: 1, date: 'January 1st 2020'}
  ])

  await knex('users').insert([
    { id: 1, username: 'swag_boi', firstName: 'alexis', lastName: 'rangel', age: 21 },
    { id: 2, username: 'big_dong69' firstName: 'steven', lastName: 'nguyen', age: 30 },
    { id: 3, username: 'max_bitch69' firstName: 'max', lastName: 'bitch', age: 4 }
  ]);

  await knex('journals').insert([
    { id: 1, name: 'ayy lmao', user_id: 1, date_id: 1 },
    { id: 2, name: "don't even say nothing to me boi you look like a muhhfucking uhhh", user_id: 1, date_id: 1 },
    { id: 3, name: 'swag on infinity', user_id: 2, date_id: 1 }
  ]);

  await knex('questions').insert([
    { id: 1, content: 'is it still me that makes you sweat', log_id: 1 },
    { id: 2, content: 'am i who you think about in bed', log_id: 2 },
    { id: 3, content: 'when the lights are dim', log_id: 3 }
  ])
}
