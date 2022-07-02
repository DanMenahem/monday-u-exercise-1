import React from "react";
import TodoFooter from "../TodoFooter/TodoFooter";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import "./TodoApp.css";

const TodoApp = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <h1 className="todoapp-title">Todo App</h1>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <TodoFooter todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoApp;
