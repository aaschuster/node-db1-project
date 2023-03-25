const db = require("../../data/db-config");

const getAll = async () => {
  return db("accounts");
}

const getById = async id => {
  const [res] = await db("accounts").where("id", id);
  return res;
}

const create = async account => {
    const [newAccountID] = await db("accounts").insert(account);
    return getById(newAccountID);
}

const updateById = async (id, account) => {
  await db("accounts").update(account).where("id", id);
  return getById(id);
}

const deleteById = async id => {
  const deletedAccount = await getById(id);
  await db("accounts").where("id", id).delete();
  return deletedAccount;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
