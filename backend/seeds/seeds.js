const bcrypt = require('bcrypt')

exports.seed = async (knex) => {

  const t = () => {
    const arr = [
      'https://secure.img1-fg.wfcdn.com/im/02305691/compr-r85/2746/27462969/disney-pixar-inside-out-sadness-life-size-cardboard-cutout.jpg',
      'https://imgc.allpostersimages.com/img/print/u-g-F7WHTJ0.jpg?w=550&h=550&p=0',
      'https://vignette.wikia.nocookie.net/insideout/images/b/b1/FEAR_Fullbody_Render.png/revision/latest?cb=20150730192044',
      'https://vignette.wikia.nocookie.net/pixar/images/5/55/194306_1_iocs_Joy2_125_per16_125_R2n.jpg/revision/latest?cb=20150614025024',
      'https://vignette.wikia.nocookie.net/pixar/images/0/08/DISGUST_Render.png/revision/latest?cb=20141209183605'
  ]
    return arr[Math.floor(Math.random() * arr.length)]
  }
  const salt = await bcrypt.genSalt();
  await knex('users').del();
  await knex('journals').del();
  await knex('questions').del();
  await knex('dates').del();

  await knex('dates').insert([
    { id: 1, date: 29, month: 12, year: 2019 },
    { id: 2, date: 30, month: 12, year: 2019 },
    { id: 3, date: 31, month: 12, year: 2019 },
    { id: 4, date: 1, month: 0, year: 2019 },
    { id: 5, date: 2, month: 0, year: 2019 },
    { id: 6, date: 3, month: 0, year: 2019 },
    { id: 7, date: 4, month: 0, year: 2019 },
    { id: 8, date: 5, month: 0, year: 2019 },
    { id: 9, date: 6, month: 0, year: 2019 },
    { id: 10, date: 7, month: 0, year: 2019 },
    { id: 11, date: 8, month: 0, year: 2019 },
    { id: 12, date: 9, month: 0, year: 2019 }
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
    { id: 7, user_id: 1, date_id: 2, question_id: 11, score: 4, affirmative: true },
    { id: 8, user_id: 1, date_id: 3, question_id: 23, score: 2, affirmative: false },
    { id: 9, user_id: 1, date_id: 3, question_id: 24, score: 3, affirmative: false },
    { id: 10, user_id: 1, date_id: 4, question_id: 2, score: 5, affirmative:true },
    { id: 11, user_id: 1, date_id: 4, question_id: 4, score: 4, affirmative: false },
    { id: 12, user_id: 1, date_id: 5, question_id: 14, score: 2, affirmative: true },
    { id: 13, user_id: 1, date_id: 5, question_id: 15, score: 1, affirmative: false },
    { id: 14, user_id: 1, date_id: 6, question_id: 5, score: 5, affirmative: true },
    { id: 15, user_id: 1, date_id: 6, question_id: 7, score: 2, affirmative: false },
    { id: 16, user_id: 1, date_id: 7, question_id: 9, score: 3, affirmative: false },
    { id: 17, user_id: 1, date_id: 7, question_id: 12, score: 4, affirmative: true },
    { id: 18, user_id: 1, date_id: 8, question_id: 16, score: 1, affirmative: false },
    { id: 19, user_id: 1, date_id: 8, question_id: 8, score: 2, affirmative: false },
    { id: 20, user_id: 1, date_id: 8, question_id: 13, score: 5, affirmative: true },
    { id: 21, user_id: 1, date_id: 9, question_id: 26, score: 4, affirmative: false },
    { id: 22, user_id: 1, date_id: 9, question_id: 27, score: 5, affirmative: false },
    { id: 23, user_id: 1, date_id: 10, question_id: 18, score: 2, affirmative: true },
    { id: 24, user_id: 1, date_id: 10, question_id: 19, score: 1, affirmative: false },
    { id: 25, user_id: 1, date_id: 11, question_id: 6, score: 3, affirmative: false },
    { id: 26, user_id: 1, date_id: 11, question_id: 26, score: 5, affirmative: true },
    { id: 27, user_id: 1, date_id: 12, question_id: 11, score: 3, affirmative: true },
    { id: 28, user_id: 1, date_id: 12, question_id: 19, score: 5, affirmative: false }
  ]);

  await knex('questions').insert([
    { id: 1, content: 'Are you thinking about death more than usual?', img_url: t() },
    { id: 2, content: 'Are you feeling hopeless?', img_url: t() },
    { id: 3, content: 'Are you feeling down and sad?', img_url: t() },
    { id: 4, content: 'Do you have less or no appetite today?', img_url: t() },
    { id: 5, content: 'Do you find it difficult to make decisions lately?', img_url: t() },
    { id: 6, content: 'Are you feeling up to your tasks?', img_url: t() },
    { id: 7, content: 'Are you looking hopefully into the future?', img_url: t() },
    { id: 8, content: 'Have you been blaming yourself recently?', img_url: t() },
    { id: 9, content: 'Are you finding it difficult to take care of your responsibilities because of how your feel?', img_url: t() },
    { id: 10, content: 'Does the way you feel interfere with how you spend your free time?', img_url: t() },
    { id: 11, content: 'Do you feel full of energy and active right now?', img_url: t() },
    { id: 12, content: 'Have you been exercising lately?', img_url: t() },
    { id: 13, content: 'Have you been speaking or moving more slowly than usual?', img_url: t() },
    { id: 14, content: 'Do you find it hard to get in contact with other people?', img_url: t() },
    { id: 15, content: 'Do you have good self esteem?', img_url: t() },
    { id: 16, content: 'Do you sometimes misjudge how your behavior affects others?', img_url: t() },
    { id: 17, content: 'Do you find it difficult to make others understand you?', img_url: t() },
    { id: 18, content: 'Are you thinking about death more than usual?', img_url: t() },
    { id: 19, content: 'Are you having trouble feeling emotions, whether happy or sad?', img_url: t() },
    { id: 20, content: 'Are you struggling with daily tasks because of the way you feel?', img_url: t() },
    { id: 21, content: 'Have you been blaming yourself recently?', img_url: t() },
    { id: 22, content: 'Are you feeling calm and relaxed right now?', img_url: t() },
    { id: 23, content: 'Are your feelings sometimes so intense that you get scared?', img_url: t() },
    { id: 24, content: 'Do you sometimes feel like a stranger to yourself?', img_url: t() },
    { id: 25, content: 'Do you tend to get confused if you think about yourself too much?', img_url: t() },
    { id: 26, content: 'Do you sometimes feel like a stranger to yourself?', img_url: t() },
    { id: 27, content: "Are your feelings often so chaotic that I can't describe them?", img_url: t() },
    { id: 28, content: 'Are you finding it difficult to handle your responsibilities because of the way you feel?', img_url: t() },
    { id: 29, content: 'Have you been crying a lot lately?', img_url: t() },
    { id: 30, content: 'Have you been thinking about certain topics or problems repeatedly, without coming to a solution?', img_url: t() },
    { id: 31, content: 'Are you speaking or moving more slowly than usual?', img_url: t() },
    { id: 32, content: 'Do you often worry about how you look, your weight, or your figure?', img_url: t() },
    { id: 33, content: "Do you think you'll be doing well in the future?", img_url: t() },
    { id: 34, content: 'Do you have less pleasure in doing thing you usually enjoy?', img_url: t() },
    { id: 35, content: 'Have you felt down over most of the last two years?', img_url: t() },
    { id: 36, content: 'Do you currently have significantly less energy than usual?', img_url: t() },
    { id: 37, content: 'Do you have recurrent fear or anxiety about leaving the house alone or being in open places?', img_url: t() },
    { id: 38, content: 'Are you calm and relaxed right now?', img_url: t() },
    { id: 39, content: 'Do you feel like you are not interested in anything right now?', img_url: t() }
  ])
}
