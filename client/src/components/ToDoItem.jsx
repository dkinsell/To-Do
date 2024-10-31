/* eslint-disable react/prop-types */
const TodoItem = ({ id, name, isCompleted, toggleTaskCompletion, deleteTask }) => (
  <li style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
    {name}
    <button onClick={() => toggleTaskCompletion(id)}>
      {isCompleted ? 'Undo' : 'Complete'}
    </button>
    <button onClick={() => deleteTask(id)}>Delete</button>
  </li>
);

export default TodoItem;
