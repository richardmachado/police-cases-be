
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('victim').del()
    .then(function () {
      // Inserts seed entries
      return knex('victim').insert([
        {
          id: 1,
          name: "Nicole Brown",
          sex: "F",
          address: "123 Main St",
          deceased: true,
          case_id: 1,
          interviewed: false,
          notes: 'cold case, never solved'
        }
      ]);
    });
};

