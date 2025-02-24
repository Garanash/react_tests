import { DiTerminal } from "react-icons/di";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from "./Todo.module.css";

function Todo({ todo, deleteTodo, toogleTodo }) {
  return (
    <div
      className={`${styles.todo} ${todo.isAlive ? styles.completedTodo : ""}`}
    >
      <DiTerminal className={styles.todoIcon} />
      <div className={styles.todoText}> todo: {todo.textTodo}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toogleTodo(todo.id)}
      />
    </div>
  );
}

export default Todo;
