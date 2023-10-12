exports.seed = function (knex) {
  return knex("rem_ranks").insert([
    {
      name: "Ceo",
      rank: 1,
      description: "",
    },
    {
      name: "Head of Accounting",
      rank: 2,
      description: "",
    },
    {
      name: "Vice President",
      rank: 3,
      description: "",
    },
    {
      name: "Shareholder",
      rank: 4,
      description: "",
    },
    {
      name: "Intern",
      rank: 5,
      description: "",
    },
  ]);
};