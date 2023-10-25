exports.seed = function (knex) {
  return knex("rem_employees").insert([
    {
      name: "Rembo",
      birthday: null,
      rank: 1,
      description: "It's the boss!",
    },
    {
      name: "Ren",
      birthday: null,
      rank: 3,
      description: "It's Mike!",
    },
    {
      name: "Wes",
      birthday: null,
      rank: 2,
      description: "Hoobooie!!!",
    },
  ]);
};