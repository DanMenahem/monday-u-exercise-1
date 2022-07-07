import todoApiServies from "../../services/todoApiServies";
import actionsTypes from "./constants";

export const getAllTodos = () => async (dispatch, getState) => {
  try {
    dispatch({ type: actionsTypes.GET_ALL_TODOS });
    const todos = await todoApiServies.apiGetTodos();
    dispatch({ type: actionsTypes.GET_ALL_TODOS_SUCCESS, payload: todos });
  } catch (error) {
    dispatch({
      type: actionsTypes.GET_ALL_TODOS_ERROR,
      payload: error.message,
    });
  }
};

export const setTodo = (name) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionsTypes.SET_TOOD });
    const todo = await todoApiServies.apiSetTodo(name);
    dispatch({ type: actionsTypes.SET_TODO_SUCCESS, payload: todo });
  } catch (error) {
    dispatch({
      type: actionsTypes.SET_TODO_ERROR,
      payload: error.message,
    });
  }
};

export const deleteTodo = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionsTypes.DELETE_TODO });
    await todoApiServies.apiDeleteTodo(id);
    dispatch({ type: actionsTypes.DELETE_TODO_SUCCESS, payload: id });
  } catch (error) {
    dispatch({
      type: actionsTypes.DELETE_TODO_ERROR,
      payload: error.message,
    });
  }
};

export const updateTodoStatus = (id, status) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionsTypes.UPDATE_TODO_STATUS });
    await todoApiServies.apiUpdateStatus(id, status);
    dispatch({
      type: actionsTypes.UPDATE_TODO_STATUS_SUCCESS,
      payload: { id, status },
    });
  } catch (error) {
    dispatch({
      type: actionsTypes.UPDATE_TODO_STATUS_ERROR,
      payload: error.message,
    });
  }
};

export const deleteAllTodos = () => async (dispatch, getState) => {
  try {
    dispatch({ type: actionsTypes.DELETE_ALL_TODOS });
    await todoApiServies.apiDeleteAll();
    dispatch({ type: actionsTypes.DELETE_ALL_TODOS_SUCCESS });
  } catch (error) {
    dispatch({
      type: actionsTypes.DELETE_ALL_TODOS_ERROR,
      payload: error.message,
    });
  }
};
