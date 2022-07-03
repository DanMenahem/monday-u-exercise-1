import { useEffect, useState } from "react";
import "./App.css";
import TodoApp from "./components/TodoApp/TodoApp";
import { apiGetTodos } from "./services/TodoApiServies";

function App() {
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessge] = useState(null);

  useEffect(() => {
    apiGetTodos()
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        setErrorMessge(err.message);
      });
  }, []);

  return errorMessage ? (
    <h1 className="error-message">{errorMessage}</h1>
  ) : (
    <TodoApp todos={todos} setTodos={setTodos} />
  );
}

export default App;
