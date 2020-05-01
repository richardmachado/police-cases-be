const bcrypt = require('bcrypt');

exports.seed = function (knex) {
  const password = bcrypt.hashSync('pass', 8);
 
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          "username": "mahoney",
          password
        },
        {
          id: 2,
          "username": "hightower",
          password
        },
        {
          id: 3,
          "username": "barbara",
          password
        },
        {
          id: 4,
          "username": "thompson",
          password
        },
        {
          id: 5,
          "username": "jones",
          password
        },
        {
          id: 6,
          "username": "martin",
          password
        },
        {
          id: 7,
          "username": "tackleberry",
          password
        },
        {
          id: 8,
          "username": "fackler",
          password
        },
        {
          id: 9,
          "username": "hooks",
          password
        },
        {
          id: 10,
          "username": "blankes",
          password
        },
        {
          id: 11,
          "username": "copeland",
          password
        },
        {
          id: 12,
          "username": "joekenda",
          password
        }
      ]);
    });
};
