const ToDoItem = ({ id, name, isCompleted, toggleTaskCompletion, deleteTask }) => {
    <li>
      {name}
      <button onClick={() => toggleTaskCompletion(id)}>
        {isCompleted ? 'Undo' : 'Complete' }
      </button>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </li>
};

export default ToDoItem