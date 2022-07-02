import React from "react";
import TodoCard from "../TodoCard/TodoCard";
import "./TodoList.css";

const TodoList = ({ todos, setTodos }) => {
  const TodoCardElement = todos.map((todo) => {
    return (
      <TodoCard
        key={todo.id}
        id={todo.id}
        value={todo.itemName}
        status={todo.status}
        todos={todos}
        setTodos={setTodos}
      />
    );
  });

  return <ul className="todo-list">{TodoCardElement}</ul>;
};

export default TodoList;
