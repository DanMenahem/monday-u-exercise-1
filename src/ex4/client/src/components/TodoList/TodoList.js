import React from "react";
import TodoCard from "../TodoCard/TodoCard";
import { ButtonGroup } from "monday-ui-react-core";
import "./TodoList.css";
import { useSelector } from "react-redux";
import TodoPlaceHolder from "../TodoPlaceHolder/TodoPlaceHolder";
import Search from "../Search/Search";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todosReducer);
  const pendingTodos = todos.filter((todo) => todo.status === false);
  const completedTodos = todos.filter((todo) => todo.status === true);

  return todos.length > 0 ? (
    <div>
      <Search className="search-todo" />
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            id={todo.id}
            value={todo.name}
            status={todo.status}
          />
        ))}
      </ul>
      <ButtonGroup
        options={[
          {
            text: "All Todos",
            value: 1,
          },
          {
            text: "Pending",
            value: 2,
          },
          {
            text: "Completed",
            value: 3,
          },
        ]}
        value={1}
      />
    </div>
  ) : (
    <TodoPlaceHolder />
  );
};

export default TodoList;
