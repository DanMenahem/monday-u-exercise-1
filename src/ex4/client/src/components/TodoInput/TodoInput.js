import React, { useState } from "react";
import "./TodoInput.css";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setTodo } from "../../redux/actions";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInputValue("");
    dispatch(setTodo(inputValue));
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
