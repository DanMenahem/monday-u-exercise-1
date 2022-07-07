import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./TodoFooter.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllTodos } from "../../redux/todos/actions";

const TodoFooter = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todosReducer);
  const [pendingTasks, setPendingTasks] = useState(0);

  useEffect(() => {
    setPendingTasks(todos.filter((todo) => todo.status === false).length);
  }, [todos]);

  const hendleDeleteAll = () => {
    dispatch(deleteAllTodos());
  };

  return (
    <div className="todo-footer">
      <p className="todo-footer-text">You have {pendingTasks} pending tasks</p>
      <Button
        text="Delete All"
        type="button"
        disabled={todos.length === 0 ? true : false}
        handleClick={hendleDeleteAll}
      />
    </div>
  );
};

export default TodoFooter;
