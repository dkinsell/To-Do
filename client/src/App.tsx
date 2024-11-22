import { useState, useEffect } from "react";
import ToDoList from './components/ToDoList';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const getTodos = async () => {
    try {
      const response = await fetch("/api/todos");
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      console.error("Error fetching todos", err);
    }
  };

  const createTodo = async () => {
    if (!newTask.trim()) return;

    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: newTask }),
      });
      const data = await response.json();
      setTodos([...todos, data]);
      setNewTask("");
    } catch (err) {
      console.error("Error creating todo", err);
    }
  };

  const updateToDo = async (id: number, completed: boolean) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !completed }),
      });
      const data = await response.json();

      setTodos(todos.map((todo) => (todo.id === id ? data : todo)));
    } catch (err) {
      console.error("Error updating todo", err);
    }
  };

  const deleteToDo = async (id: number) => {
    try {
      await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error("Error deleting todo", err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todo App</h1>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={createTodo}>Create</button>
      </div>

      <ToDoList 
        todos={todos}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
      />
    </div>
  );
};

export default App;
