import React, { useState } from "react";
import { apiDeleteTodo, apiUpdateStatus } from "../../services/TodoApiServies";
import "./TodoCard.css";
import { BsTrash } from "react-icons/bs";
import PropTypes from "prop-types";

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
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            todo.status = !todo.status;
          }
          return todo;
        })
      );
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
      <BsTrash
        className="trash-icon"
        size="25px"
        id={id}
        onClick={handleDelete}
      />
    </li>
  );
};

TodoCard.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoCard;
