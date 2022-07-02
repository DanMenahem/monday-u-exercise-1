import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./TodoFooter.css";
import { apiDeleteAll } from "../../services/TodoApiServies";

const TodoFooter = ({ todos, setTodos }) => {
  const [pendingTasks, setPendingTasks] = useState(0);

  useEffect(() => {
    setPendingTasks(todos.filter((todo) => todo.status === false).length);
  }, [todos]);

  const hendleDeleteAll = () => {
    apiDeleteAll().then(() => {
      setTodos([]);
    });
  };

  return (
    <div className="todo-footer">
      <p className="todo-footer-text">You have {pendingTasks} pending tasks</p>
      <Button
        text="Delete All"
        type="button"
        disabled={false}
        handleClick={hendleDeleteAll}
      />
    </div>
  );
};

export default TodoFooter;
