import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoList from "./components/Todos/TodoList";
import TodoForm from "./components/Todos/TodoForm";
import TodoActions from "./components/Todos/TodosActions";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newObject = {
      textTodo: text,
      isAlive: false,
      id: uuidv4(),
    };
    setTodos([...todos, newObject]);
  };

  const deleteTodoHandler = (id) =>
    setTodos(todos.filter((todo) => todo.id != id));

  const toogleTodoHandler = (id) =>
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isAlive: !todo.isAlive }
          : { ...todo };
      })
    );

  const deleteAll = () => {
    setTodos([]);
  };

  const deleteComplete = () => {
    setTodos(todos.filter((todo) => !todo.isAlive));
  };

  const completedCount = todos.filter((todo) => todo.isAlive).length;

  return (
    <div className="App">
      <h1>todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodoActions
          deleteA={deleteAll}
          deleteC={deleteComplete}
          completed={!!completedCount}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toogleTodo={toogleTodoHandler}
      />
      {completedCount > 0 && (
        <h2>{`You have complete ${completedCount} ${
          completedCount > 1 ? "todos" : "todo"
        }`}</h2>
      )}
    </div>
  );
}

export default App;
