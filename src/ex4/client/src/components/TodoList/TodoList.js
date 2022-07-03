import React from "react";
import TodoCard from "../TodoCard/TodoCard";
import "./TodoList.css";
import PropTypes from "prop-types";

const TodoList = ({ todos, setTodos }) => {
  const TodoCardElement = todos.map((todo) => {
    return (
      <TodoCard
        key={todo.id}
        id={todo.id}
        value={todo.name}
        status={todo.status}
        todos={todos}
        setTodos={setTodos}
      />
    );
  });

  return <ul className="todo-list">{TodoCardElement}</ul>;
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoList;
