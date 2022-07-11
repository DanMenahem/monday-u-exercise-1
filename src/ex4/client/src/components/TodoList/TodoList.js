import React, { useEffect, useState } from "react";
import TodoCard from "../TodoCard/TodoCard";
import { ButtonGroup } from "monday-ui-react-core";
import "./TodoList.css";
import { useSelector } from "react-redux";
import TodoPlaceHolder from "../TodoPlaceHolder/TodoPlaceHolder";
import Loading from "../Loading/Loading";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todosReducer);
  const { isLoading } = useSelector((state) => state.loadingReducer)
  const [buttonValue, setButtonValue] = useState(1)
  const pendingTodos = todos.filter((todo) => todo.status === false);
  const completedTodos = todos.filter((todo) => todo.status === true);

  const handleSelect = (value) => {
    setButtonValue(value);
  }

  const todoElement = () => {
    if (buttonValue === 1) return todos.map((todo) => <TodoCard key={todo.id} todo={todo} />);
    else if (buttonValue === 2) return pendingTodos.map((todo) => <TodoCard key={todo.id} todo={todo} />);
    else return completedTodos.map((todo) => <TodoCard key={todo.id} todo={todo} />);
  }

  return todos.length > 0 ? (
    isLoading ? <Loading /> :
      <div>
        <ul className="todo-list">
          {todoElement()}
        </ul>
        <ButtonGroup
          onSelect={handleSelect}
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
          value={buttonValue}
        />
      </div>
  ) : (
    <TodoPlaceHolder />
  );
};

export default TodoList;
