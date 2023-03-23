const db = require("../../data/db-config");

const getAll = async () => {
  const accounts = await db("accounts");
  return accounts;
}

const getById = async id => {
  const [res] = await db("accounts").where("id", id);
  return res;
}

const create = async account => {
    const [newAccountID] = await db("accounts").insert(account);
    const newAccount = await getById(newAccountID);
    return newAccount;
}

const updateById = async (id, account) => {
  await db("accounts").update(account).where("id", id);
  const updatedAccount = await getById(id);
  return updatedAccount;
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
