import React, { useState } from 'react';
import initialTodos from './data';

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTask, setNewTask] = useState('');
  const [newStatus, setNewStatus] = useState('pending');

  const addTodo = () => {
    if (!newTask.trim()) return;
    const newTodo = {
      id: Date.now(),
      task: newTask,
      status: newStatus
    };
    setTodos([...todos, newTodo]);
    setNewTask('');
    setNewStatus('pending');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📋 Todo List (Static Import)</h2>

      <input
        type="text"
        placeholder="Task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="in-progress">In-Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <strong>{todo.task}</strong> - <em>{todo.status}</em>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
