import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import todosReducer from "./todos/reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  todosReducer,
});

export const store = configureStore({
  reducer: allReducers,
  middleware: [thunkMiddleware],
  preloadedState: {},
});
