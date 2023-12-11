import { Button } from "../Button/Button";
import styles from "./ToDoItem.module.css";

export function ToDoItem({
  task,
  done,
  id,
  onButtonDone,
  onButtonDelete,
  onButtonEdit,
}) {
  return (
    <li className={styles.item} key={id}>
      <span className={`${styles.task} & ${done ? styles.done : ""}`}>
        {task}
      </span>
      {!done && <Button onClick={() => onButtonDone(id)}>done</Button>}
      <Button onClick={() => onButtonEdit(id)}>edit</Button>
      <Button onClick={() => onButtonDelete(id)}>delete</Button>
      </li>
      
  );
}
