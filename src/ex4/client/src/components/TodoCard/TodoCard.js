import React, { useState } from "react";
import "./TodoCard.css";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodoStatus } from "../../redux/todos/actions";

const TodoCard = ({ id, value, status }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteTodo(id));
  };

  const handleStatusChange = (e) => {
    e.preventDefault();
    dispatch(updateTodoStatus(id, !status));
  };

  return (
    <li className="todo-card">
      <div className="todo-card-content">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={status}
          onChange={handleStatusChange}
        />
        <p className="todo-value">{value}</p>
      </div>
      <BsTrash
        className="trash-icon"
        size="25px"
        id={id}
        onClick={handleDelete}
      />
    </li>
  );
};

export default TodoCard;
