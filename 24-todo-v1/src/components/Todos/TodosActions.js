import { RiCloseCircleLine, RiCheckboxMultipleFill } from "react-icons/ri";
import Button from "../UI/Button";
import styles from "./TodosActions.module.css";

function TodoActions({ deleteA, deleteC, completed }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button onClick={deleteA}>
        <RiCloseCircleLine />
      </Button>
      <Button onClick={deleteC} disabled={!completed}>
        <RiCheckboxMultipleFill />
      </Button>
    </div>
  );
}

export default TodoActions;
