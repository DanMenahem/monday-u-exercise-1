import todoApiServies from "../services/todoApiServies";
import actionsTypes from "./constants"

export const getAllTodos = () => async (dispatch, getState) => {
  try {
    dispatch({ type: actionsTypes.LOADING_START });
    const todos = await todoApiServies.apiGetTodos();
    dispatch({ type: actionsTypes.GET_ALL_TODOS_SUCCESS, payload: todos });
    dispatch({ type: actionsTypes.LOADING_END });
  } catch (error) {
    dispatch({
      type: actionsTypes.GET_ALL_TODOS_ERROR,
      payload: error.message,
    });
  }
};

export const setTodo = (name) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionsTypes.LOADING_START });
    const todo = await todoApiServies.apiSetTodo(name);
    dispatch({ type: actionsTypes.SET_TODO_SUCCESS, payload: todo });
    dispatch({ type: actionsTypes.LOADING_END });
  } catch (error) {
    dispatch({
      type: actionsTypes.SET_TODO_ERROR,
      payload: error.message,
    });
  }
};

export const deleteTodo = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionsTypes.LOADING_START });
    await todoApiServies.apiDeleteTodo(id);
    dispatch({ type: actionsTypes.DELETE_TODO_SUCCESS, payload: id });
    dispatch({ type: actionsTypes.LOADING_END });
  } catch (error) {
    dispatch({
      type: actionsTypes.DELETE_TODO_ERROR,
      payload: error.message,
    });
  }
};

export const updateTodoStatus = (id, status) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionsTypes.LOADING_START });
    await todoApiServies.apiUpdateStatus(id, status);
    dispatch({
      type: actionsTypes.UPDATE_TODO_STATUS_SUCCESS,
      payload: { id, status },
    });
    dispatch({ type: actionsTypes.LOADING_END });
  } catch (error) {
    dispatch({
      type: actionsTypes.UPDATE_TODO_STATUS_ERROR,
      payload: error.message,
    });
  }
};

export const deleteAllTodos = () => async (dispatch, getState) => {
  try {
    dispatch({ type: actionsTypes.LOADING_START });
    await todoApiServies.apiDeleteAll();
    dispatch({ type: actionsTypes.DELETE_ALL_TODOS_SUCCESS });
    dispatch({ type: actionsTypes.LOADING_END });
  } catch (error) {
    dispatch({
      type: actionsTypes.DELETE_ALL_TODOS_ERROR,
      payload: error.message,
    });
  }
};

