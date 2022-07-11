import React, { useState } from "react";
import "./TodoCard.css";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodoStatus } from "../../redux/actions";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, name, status } = todo;

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
        <p className="todo-value">{name}</p>
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
