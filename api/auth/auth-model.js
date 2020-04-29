const db = require("../../data/db-config.js");

module.exports = {
  find,
  findById,
  findBy,
  insert
};

function find() {
  return db("user").select("id", "username");
}

function findById(id) {
  return db("user")
    .select("id", "username")
    .where({ id })
    .first();
}

function findBy(data) {
  return db("user").where(data);
}

async function insert(userData) {
  const [id] = await db("user").insert(userData, "id");
  return db("user")
    .where({ id })
    .first();
}