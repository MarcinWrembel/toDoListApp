export function getTasksNumber(tasksNumber) {
  switch (true) {
    case tasksNumber > 4:
      return `${tasksNumber} zadań`;
    case tasksNumber > 1:
      return `${tasksNumber} zadania`;
    case tasksNumber === 1:
      return `${tasksNumber} zadanie`;
    default:
      "Brak zadań";
  }
}
