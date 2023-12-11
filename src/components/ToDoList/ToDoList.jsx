import { ToDoItem } from "../ToDoItem/ToDoItem";



export function ToDoList({ todos, onButtonDone, onButtonDelete, onButtonEdit }) {
  const createItems = (todos) => {
    return todos.map(({ task, id, done }) => (
      <ToDoItem
        key={id}
        task={task}
        done={done}
        onButtonDone={onButtonDone}
        onButtonDelete={onButtonDelete}
        onButtonEdit={onButtonEdit}
        id={id}
      />
    ));
      
  };

  return <ul>{createItems(todos)}</ul>;
}