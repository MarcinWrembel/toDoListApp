import "normalize.css";
import styles from "./App.module.css";
import { useState } from "react";
import { Form } from "./components/Form/Form";
import { getTasksNumber } from "./utils/getTasksNumber";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { nanoid } from "nanoid";
import { EditTaskModal } from "./components/EditTaskModal/EditTaskModal";
// import { todos } from "./assets/MockData/MockData";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [todos, setTodos] = useState([]);
  const [isModalShown, setModalShown] = useState(false);

  const setFormVisibility = () => {
    setIsFormShown((prev) => !prev);
  };

  const handleFormSubmit = (newTodo) => {
    setTodos((prevTodos) => [
      { task: newTodo, done: false, id: nanoid(), isEdited: false },
      ...prevTodos,
    ]);
  };

  const markTaskDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, done: true } : todo))
    );
  };

  const deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const openTaskModal = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEdited: true } : todo
      )
    );
    setModalShown(true);
  };

  const cancelTaskEdit = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEdited: false } : todo
      )
    );
    setModalShown(false);
  };

  const saveTask = (id, changedTask) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, isEdited: false, task: changedTask, done: false }
          : todo
      )
    );
    setModalShown(false);
  };

  const taskToEdit = () => {
    const task = todos.find((todo) => todo.isEdited === true);
    return task;
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.heading}>dodaj treść</h1>
          <h2>{getTasksNumber(todos.length)}</h2>
        </div>
        <button
          className={styles.button}
          onClick={setFormVisibility}
          title='show/hide form'
        >
          {!isFormShown ? "+" : "-"}
        </button>
      </header>
      {isFormShown && <Form onFormSubmit={handleFormSubmit} />}
      <ToDoList
        todos={todos}
        onButtonDone={markTaskDone}
        onButtonDelete={deleteTask}
        onButtonEdit={openTaskModal}
      ></ToDoList>
      <EditTaskModal
        isModalShown={isModalShown}
        onButtonSave={saveTask}
        onButtonCancel={cancelTaskEdit}
        taskToEdit={taskToEdit()}
      />
    </div>
  );
}

export default App;
