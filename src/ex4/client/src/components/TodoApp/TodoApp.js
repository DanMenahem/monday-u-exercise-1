import React from "react";
import TodoFooter from "../TodoFooter/TodoFooter";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import TodoPlaceHolder from "../TodoPlaceHolder/TodoPlaceHolder";
import "./TodoApp.css";
import PropTypes from "prop-types";
import TodoCard from "../TodoCard/TodoCard";

const TodoApp = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <h1 className="todoapp-title">Todo App</h1>
      <TodoInput todos={todos} setTodos={setTodos} />
      {todos.length > 0 ? (
        <TodoList todos={todos} setTodos={setTodos} />
      ) : (
        <TodoPlaceHolder />
      )}
      <TodoFooter todos={todos} setTodos={setTodos} />
    </div>
  );
};

TodoCard.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoApp;
