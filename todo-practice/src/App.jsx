import { useState } from 'react'
import './App.css'
import initialTodos from './data';

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTask, setNewTask] = useState('');
  const [newStatus, setNewStatus] = useState("pending")

  const addTodo = () => {
    if(!newTask.trim()) return;

    const newTodo = {
      id : Date.now(),
      task :newTask,
      status: newStatus
    };

    setTodos([...todos, newTodo]);
    setNewTask('')
    setNewStatus('pending');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));

  }

  return (
    <>
      <h2>Todo list (static import)</h2>
    </>
  )
}

export default App
