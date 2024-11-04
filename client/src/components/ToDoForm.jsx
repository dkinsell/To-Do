/* eslint-disable react/prop-types */
import { useState } from 'react';

const ToDoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder='Add a new task' 
      />
      <button type='submit'>Add Task</button>
    </form>
  );
};

export default ToDoForm