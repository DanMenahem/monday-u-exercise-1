import React, { useEffect } from "react";
import TodoFooter from "../TodoFooter/TodoFooter";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import "./TodoApp.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos } from "../../redux/todos/actions";

const TodoApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="todoapp-title">Todo App</h1>
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </div>
  );
};

export default TodoApp;
