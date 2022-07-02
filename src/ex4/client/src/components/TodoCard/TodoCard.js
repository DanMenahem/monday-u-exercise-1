import React, { useState } from "react";
import { apiDeleteTodo, apiUpdateStatus } from "../../services/TodoApiServies";
import "./TodoCard.css";

const TodoCard = ({ id, value, status, todos, setTodos }) => {
  const [todoStatus, setTodoStatus] = useState(status);

  const handleDelete = (e) => {
    e.preventDefault();
    apiDeleteTodo(id).then((data) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    });
  };

  const handleStatusChange = (e) => {
    e.preventDefault();
    apiUpdateStatus(id, !todoStatus).then((data) => {
      setTodoStatus(!todoStatus);
    });
  };

  return (
    <li className="todo-card">
      <div className="todo-card-content">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todoStatus}
          onChange={handleStatusChange}
        />
        <p className="todo-value">{value}</p>
      </div>
      <img
        src="https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png"
        alt=""
        className="trash-icon"
        id={id}
        onClick={handleDelete}
      />
    </li>
  );
};

export default TodoCard;
