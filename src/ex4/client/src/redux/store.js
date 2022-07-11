import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import todosReducer from "./todos/reducer";
import loadingReducer from "./loading/reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  todosReducer,
  loadingReducer,
});

export const store = configureStore({
  reducer: allReducers,
  middleware: [thunkMiddleware],
  preloadedState: {},
});
