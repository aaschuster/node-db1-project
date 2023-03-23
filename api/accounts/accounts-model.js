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
    await db("accounts").insert(account);
    const res = await db("accounts");
    return res[res.length-1];
}

const updateById = async (id, account) => {
  await db("accounts").update(account).where("id", id);
  const updatedAccount = await db("accounts").where("id", id);
  return updatedAccount;
}

const deleteById = async id => {
  const deletedAccount = await db("accounts").where({ productID: id});
  await db("accounts").where("productID", id).delete();
  return deletedAccount;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
