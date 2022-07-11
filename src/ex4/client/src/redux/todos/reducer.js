import actionsTypes from "../constants";

const initialState = {
  todos: [],
  isError: false,
  errorMessage: null,
};

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.GET_ALL_TODOS_SUCCESS:
      return {
        ...state,
        todos: payload,
        isError: false,
        errorMessage: null,
      };
    case actionsTypes.GET_ALL_TODOS_ERROR:
      return {
        ...state,
        isError: true,
        errorMessage: payload,
      };
    case actionsTypes.SET_TODO_SUCCESS:
      return {
        ...state,
        todos: Array.isArray(payload)
          ? [...state.todos, ...payload]
          : [...state.todos, payload],
        isError: false,
        errorMessage: null,
      };
    case actionsTypes.SET_TODO_ERROR:
      return {
        ...state,
        isError: true,
        errorMessage: payload,
      };
    case actionsTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
        isError: false,
        errorMessage: null,
      };
    case actionsTypes.DELETE_TODO_ERROR:
      return {
        ...state,
        isError: true,
        errorMessage: payload,
      };
    case actionsTypes.UPDATE_TODO_STATUS_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, status: payload.status } : todo
        ),
        isError: false,
        errorMessage: null,
      };
    case actionsTypes.UPDATE_TODO_STATUS_ERROR:
      return {
        ...state,
        isError: true,
        errorMessage: payload,
      };
    case actionsTypes.DELETE_ALL_TODOS_SUCCESS:
      return {
        ...state,
        todos: [],
        isError: false,
        errorMessage: null,
      };
    case actionsTypes.DELETE_ALL_TODOS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };

    default:
      return state;
  }
};


export default todosReducer;
