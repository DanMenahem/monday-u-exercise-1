import actionsTypes from "./constants";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  errorMessage: null,
};

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.GET_ALL_TODOS:
      return { ...state, isLoading: true, isError: false, errorMessage: null };
    case actionsTypes.GET_ALL_TODOS_SUCCESS:
      return {
        ...state,
        todos: payload,
        isLoading: false,
        isError: false,
        errorMessage: null,
      };
    case actionsTypes.GET_ALL_TODOS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    case actionsTypes.SET_TODO:
      return { ...state, isLoading: true, isError: false, errorMessage: null };
    case actionsTypes.SET_TODO_SUCCESS:
      return {
        ...state,
        todos: Array.isArray(payload)
          ? [...state.todos, ...payload]
          : [...state.todos, payload],
        isLoading: false,
        isError: false,
        errorMessage: null,
      };
    case actionsTypes.SET_TODO_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    case actionsTypes.DELETE_TODO:
      return { ...state, isLoading: true, isError: false, errorMessage: null };
    case actionsTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
        isLoading: false,
        isError: false,
        errorMessage: null,
      };
    case actionsTypes.DELETE_TODO_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    case actionsTypes.UPDATE_TODO_STATUS:
      return { ...state, isLoading: true, isError: false, errorMessage: null };
    case actionsTypes.UPDATE_TODO_STATUS_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, status: payload.status } : todo
        ),
        isLoading: false,
        isError: false,
        errorMessage: null,
      };
    case actionsTypes.UPDATE_TODO_STATUS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    case actionsTypes.DELETE_ALL_TODOS:
      return { ...state, isLoading: true, isError: false, errorMessage: null };
    case actionsTypes.DELETE_ALL_TODOS_SUCCESS:
      return {
        ...state,
        todos: [],
        isLoading: false,
        isError: false,
        errorMessage: null,
      };
    case actionsTypes.DELETE_ALL_TODOS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };

    default:
      return state;
  }
};

export default todosReducer;
