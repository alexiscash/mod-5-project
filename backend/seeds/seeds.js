
exports.seed = async (knex) => {
  await knex('users').del();
  await knex('journals').del();
  await knex('questions').del();
  await knex('dates').del();

  await knex('dates').insert([
    { id: 1, date: 'January 1st 2020' },
    { id: 2, date: 'January 2nd 2020' }
  ])

  await knex('users').insert([
    { id: 1, username: 'swag_boi', firstName: 'alexis', lastName: 'rangel', age: 21, email: 'swag@gmail.com', password: '6969' },
    { id: 2, username: 'big_dong69', firstName: 'steven', lastName: 'nguyen', age: 30, email: 'swag@gmail.com', password: '6969' },
    { id: 3, username: 'max_bitch69', firstName: 'max', lastName: 'bitch', age: 4, email: 'swag@gmail.com', password: '6969' }
  ]);

  await knex('journals').insert([
    { id: 1, user_id: 1, date_id: 1, score: 3 },
    { id: 2, user_id: 1, date_id: 1, score: 4 },
    { id: 3, user_id: 2, date_id: 1, score: 5 },
    { id: 4, user_id: 3, date_id: 2, score: 5 },
    { id: 5, user_id: 3, date_id: 2, score: 5 }
  ]);

  await knex('questions').insert([
    { id: 1, content: 'Are you thinking about death more than usual?' },
    { id: 2, content: 'Are you feeling hopeless?' },
    { id: 3, content: 'Are you feeling down and sad?' },
    { id: 4, content: 'Do you have less or no appetite today?' },
    { id: 5, content: 'Do you find it difficult to make decisions lately?' }
  ])
}
