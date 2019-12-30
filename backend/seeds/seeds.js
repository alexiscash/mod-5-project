const bcrypt = require('bcrypt')

exports.seed = async (knex) => {
  const salt = await bcrypt.genSalt();
  await knex('users').del();
  await knex('journals').del();
  await knex('questions').del();
  await knex('dates').del();

  await knex('dates').insert([
    { id: 1, date: 'January 1st 2020' },
    { id: 2, date: 'January 2nd 2020' }
  ])

  await knex('users').insert([
    { id: 1, username: 'swag_boi', firstName: 'alexis', lastName: 'rangel', age: 21, email: 'swag@gmail.com', password: await bcrypt.hash('6969', salt) },
    { id: 2, username: 'big_dong69', firstName: 'steven', lastName: 'nguyen', age: 30, email: 'swag@gmail.com', password: await bcrypt.hash('6969', salt) },
    { id: 3, username: 'max_bitch69', firstName: 'max', lastName: 'bitch', age: 4, email: 'swag@gmail.com', password: await bcrypt.hash('6969', salt) }
  ]);

  await knex('journals').insert([
    { id: 1, user_id: 1, date_id: 1, question_id: 1, score: 3, affirmative: true },
    { id: 2, user_id: 1, date_id: 1, question_id: 3, score: 4, affirmative: false },
    { id: 3, user_id: 2, date_id: 1, question_id: 6, score: 5, affirmative: false },
    { id: 4, user_id: 3, date_id: 2, question_id: 5, score: 5, affirmative: true },
    { id: 5, user_id: 3, date_id: 2, question_id: 18, score: 5, affirmative: true },
    { id: 6, user_id: 1, date_id: 2, question_id: 24, score: 1, affirmative: false },
    { id: 7, user_id: 1, date_id: 2, question_id: 11, score: 4, affirmative: true }
  ]);

  await knex('questions').insert([
    { id: 1, content: 'Are you thinking about death more than usual?' },
    { id: 2, content: 'Are you feeling hopeless?' },
    { id: 3, content: 'Are you feeling down and sad?' },
    { id: 4, content: 'Do you have less or no appetite today?' },
    { id: 5, content: 'Do you find it difficult to make decisions lately?' },
    { id: 6, content: 'Are you feeling up to your tasks?' },
    { id: 7, content: 'Are you looking hopefully into the future?' },
    { id: 8, content: 'Have you been blaming yourself recently?' },
    { id: 9, content: 'Are you finding it difficult to take care of your responsibilities because of how your feel?' },
    { id: 10, content: 'Does the way you feel interfere with how you spend your free time?' },
    { id: 11, content: 'Do you feel full of energy and active right now?' },
    { id: 12, content: 'Have you been exercising lately?' },
    { id: 13, content: 'Have you been speaking or moving more slowly than usual?' },
    { id: 14, content: 'Do you find it hard to get in contact with other people?' },
    { id: 15, content: 'Do you have good self esteem?' },
    { id: 16, content: 'Do you sometimes misjudge how your behavior affects others?' },
    { id: 17, content: 'Do you find it difficult to make others understand you?' },
    { id: 18, content: 'Are you thinking about death more than usual?' },
    { id: 19, content: 'Are you having trouble feeling emotions, whether happy or sad?' },
    { id: 20, content: 'Are you struggling with daily tasks because of the way you feel?' },
    { id: 21, content: 'Have you been blaming yourself recently?' },
    { id: 22, content: 'Are you feeling calm and relaxed right now?' },
    { id: 23, content: 'Are your feelings sometimes so intense that you get scared?' },
    { id: 24, content: 'Do you sometimes feel like a stranger to yourself?' },
    { id: 25, content: 'Do you tend to get confused if you think about yourself too much?' },
    { id: 26, content: 'Do you sometimes feel like a stranger to yourself?' },
    { id: 27, content: "Are your feelings often so chaotic that I can't describe them?" },
    { id: 28, content: 'Are you finding it difficult to handle your responsibilities because of the way you feel?' },
    { id: 29, content: 'Have you been crying a lot lately?' },
    { id: 30, content: 'Have you been thinking about certain topics or problems repeatedly, without coming to a solution?' },
    { id: 31, content: 'Are you speaking or moving more slowly than usual?' }
  ])
}
