const itemService = require("../services/itemService");

async function createTodo(req, res) {
  const value = req.body.value;
  let data = await itemService.addTodo(value);
  res.status(200).json(data);
}

async function getAll(req, res) {
  let data = await itemService.getAll();
  if (!data) data = [];
  res.status(200).json(data);
}

async function deleteTodo(req, res) {
  const id = req.params.id;
  const data = await itemService.deleteTodo(id);
  res.status(200).json(data);
}

async function deleteAll(req, res) {
  await itemService.deleteAll();
  res.status(200).json(req.body);
}

async function updateTodoStatus(req, res) {
  const id = req.params.id;
  const status = req.body.status;
  const data = await itemService.updateStatus(id, status);
  res.status(200).json(data);
}

module.exports = {
  createTodo,
  getAll,
  deleteTodo,
  deleteAll,
  updateTodoStatus,
};
