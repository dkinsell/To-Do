/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTaskCompletion, deleteTask }) => (
  <ul>
    {tasks.map(({ id, name, isCompleted }) => (
      <TodoItem
        key={id}
        id={id}
        name={name}
        isCompleted={isCompleted}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    ))}
  </ul>
);

export default TodoList;
