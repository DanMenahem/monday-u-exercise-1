import { useEffect, useState } from "react";
import "./App.css";
import TodoApp from "./components/TodoApp/TodoApp";
import { apiGetTodos } from "./services/TodoApiServies";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    apiGetTodos().then((data) => {
      setTodos(data);
    });
  }, []);

  return <TodoApp todos={todos} setTodos={setTodos} />;
}

export default App;
