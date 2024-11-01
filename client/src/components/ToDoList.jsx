/* eslint-disable react/prop-types */
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <ToDoItem 
          key={task.id}
          id={task.id}
          name={task.name}
          isCompleted={task.isCompleted}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};



export default ToDoList;
