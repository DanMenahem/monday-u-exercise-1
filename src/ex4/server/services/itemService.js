// The ItemManager should go here. Remember that you have to export it.
const pokemonClient = require("../clients/pokemon_client");
const ItemDOAService = require("../dataAccess/ItemDOAService");

async function getAll() {
  return await ItemDOAService.fetchAll();
}

async function addTodo(itemValue) {
  if (isNumber(itemValue)) {
    return await fetchAndAddPokemon(itemValue);
  } else if (isNumberList(itemValue)) {
    return await fetchAndAddManyPokemon(itemValue);
  } else {
    return await ItemDOAService.createItem(itemValue);
  }
}

async function deleteTodo(id) {
  await ItemDOAService.deleteItem(id);
}

async function deleteAll() {
  await ItemDOAService.deleteAllitems();
}

async function updateStatus(id, status) {
  await ItemDOAService.updateItemStatus(id, status);
}

async function fetchAndAddPokemon(itemValue) {
  try {
    const { name } = await pokemonClient.getPokemon(itemValue);
    return await ItemDOAService.createItem(`Catch ${name}`);
  } catch (error) {
    return await ItemDOAService.createItem(
      `Pokemon with ID ${itemValue} was not found`
    );
  }
}

async function fetchAndAddManyPokemon(itemValue) {
  try {
    const pokemons = await pokemonClient.getManyPokemon(
      itemValue.replaceAll(" ", "").split(",")
    );

    const pokemonsItemName = pokemons.map((pokemon) => `Catch ${pokemon.name}`);
    return await ItemDOAService.createItems(pokemonsItemName);
  } catch (error) {
    return await ItemDOAService.createItem(
      `Failed to fetch pokemon with this input: ${itemValue}`
    );
  }
}

function isNumber(value) {
  return !isNaN(Number(value));
}
function isNumberList(value) {
  return value.split(",").every(isNumber);
}

module.exports = {
  addTodo,
  getAll,
  deleteTodo,
  deleteAll,
  updateStatus,
};
