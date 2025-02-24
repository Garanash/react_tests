import Todo from "./Todo";

function TodoList({ todos, deleteTodo, toogleTodo }) {
  return (
    <div>
      {!todos.length && <h1>List is empty</h1>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toogleTodo={toogleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
