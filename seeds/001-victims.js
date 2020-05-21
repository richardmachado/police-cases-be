
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
        },
        {
          id: 2,
          name: "Ronald Goldman",
          sex: "M",
          address: "9655 Main St",
          deceased: true,
          case_id: 1,
          interviewed: false,
          notes: 'cold case, never solved'
        },
        {
          id: 3,
          name: "Jane Doe",
          sex: "F",
          address: "None",
          deceased: true,
          case_id: 2,
          interviewed: false,
          notes: 'identity pending'
        }
      ]);
    });
};

