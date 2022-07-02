import axios from "axios";

async function apiGetTodos() {
  try {
    const { data } = await axios.get("/item");
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}

async function apiSetTodo(todo) {
  try {
    const { data } = await axios.post("/item", { value: todo });
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}

async function apiDeleteTodo(id) {
  try {
    const { data } = await axios.delete(`/item/${id}`);
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}

async function apiUpdateStatus(id, status) {
  try {
    const { data } = await axios.put(`/item/${id}`, { status });
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}

async function apiDeleteAll() {
  try {
    await axios.delete("/item");
  } catch (error) {
    console.log("Error:", error);
  }
}

export {
  apiGetTodos,
  apiSetTodo,
  apiDeleteTodo,
  apiUpdateStatus,
  apiDeleteAll,
};
