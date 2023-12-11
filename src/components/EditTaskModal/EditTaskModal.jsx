import { useRef, useState } from "react";
import { Button } from "../Button/Button";
import styles from "./EditTaskModal.module.css";

export function EditTaskModal({
  onButtonSave,
  onButtonCancel,
  isModalShown,
  taskToEdit,
}) {
  const [modifiedTask, setModifiedTask] = useState("");
  const modalRef = useRef(null);

  if (!isModalShown) return null;

  const { id, task } = taskToEdit;

  const handleSave = () => {
    onButtonSave(id, modifiedTask);
    setModifiedTask("");
  };

  const handleInputChange = (e) => {
    setModifiedTask(e.target.value);
  };

  const handleModalClose = (e, id) => {
    if (
      isModalShown &&
      modalRef.current &&
      (!modalRef.current.contains(e.target) ||
        e.key === "Escape" ||
        e.target.innerText === "Cancel")
    ) {
      setModifiedTask("");
      onButtonCancel(id);
    }

    document.removeEventListener("mousedown", handleModalClose);
    document.removeEventListener("keydown", handleModalClose);
  };

  document.addEventListener("mousedown", handleModalClose);
  document.addEventListener("keydown", handleModalClose);

  return (
    <div className={styles["taskModal-overlay"]}>
      <div className={styles.taskModal} ref={modalRef}>
        <h2>Change task text:</h2>
        <span className={styles.taskModal__prevText}>{task}</span>
        <textarea
          className={styles.taskModal__newText}
          onChange={(e) => handleInputChange(e)}
          value={modifiedTask}
        ></textarea>
        <>
          <Button onClick={() => handleSave()}>Save</Button>
          <Button onClick={handleModalClose}>Cancel</Button>
        </>
      </div>
    </div>
  );
}
