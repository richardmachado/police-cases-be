
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('case').del()
    .then(function () {
      // Inserts seed entries
      return knex('case').insert([
        {
          id: 1, 
          status: "cold",
          case_type: "criminal",
          date: new Date(1994, 6, 12),
          notes:"one day it will be solved",
          assigned_to: 1
        },
        {
          id: 2, 
          status: "cold",
          case_type: "criminal",
          date: new Date(1994, 6, 12),
          notes:"one day it will be solved",
          assigned_to: 1

        },
        {
          id: 3, 
          status: "active",
          case_type: "criminal",
          date: new Date(2019, 12, 25),
          notes:"brand new",
          assigned_to: 2

        }
      ]);
    });
};
