const { Item } = require("../db/models");

async function fetchAll() {
  return await Item.findAll();
}

async function createItem(name) {
  return await Item.create({ name, status: false });
}

async function createItems(itemsName) {
  return await Item.bulkCreate(
    itemsName.map((name) => ({ name, status: false }))
  );
}

async function deleteItem(id) {
  await Item.destroy({
    where: { id },
  });
}

async function deleteAllitems() {
  await Item.destroy({
    where: {},
    truncate: true,
    restartIdentity: true,
  });
}

async function updateItemStatus(id, status) {
  await Item.update(
    { status },
    {
      where: { id },
    }
  );
}

module.exports = {
  fetchAll,
  createItem,
  createItems,
  deleteItem,
  deleteAllitems,
  updateItemStatus,
};
