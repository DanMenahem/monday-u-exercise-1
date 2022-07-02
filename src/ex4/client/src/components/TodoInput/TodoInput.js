import React, { useState } from "react";
import { apiSetTodo } from "../../services/TodoApiServies";
import "./TodoInput.css";
import Button from "../Button/Button";

const TodoInput = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    apiSetTodo(inputValue).then((data) => {
      Array.isArray(data)
        ? setTodos((prevTodos) => [...prevTodos, ...data])
        : setTodos((prevTodos) => [...prevTodos, data]);
      setInputValue("");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-form">
      <input
        type="text"
        placeholder="Enter a todo item"
        className="todo-input-text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <Button text="Add" type="submit" disabled={inputValue ? false : true} />
    </form>
  );
};

export default TodoInput;
