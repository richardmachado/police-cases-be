
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
          status: "active",
          case_type: "criminal",
          date: new Date(2020, 5, 12),
          notes:"identity pending, found in vehicle",
          assigned_to: 1

        },
      
      ]);
    });
};
