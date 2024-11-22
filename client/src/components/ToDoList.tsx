interface Todo {
  id: number,
  task: string,
  completed: boolean
}

interface ToDoListProps {
  todos: Todo[],
  updateToDo: (id: number, completed: boolean) => void;
  deleteToDo: (id: number) => void;
}

const ToDoList = ({ todos, updateToDo, deleteToDo }: ToDoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              marginRight: '10px',
            }}
          >
            {todo.task}
          </span>
          <button onClick={() => updateToDo(todo.id, todo.completed)}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => deleteToDo(todo.id)} style={{ marginLeft: '10px' }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ToDoList