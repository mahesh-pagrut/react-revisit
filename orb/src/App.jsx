import React from 'react'
import Home from './pages/Home/Home'
import './App.css'

const App = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App



// import React, { useEffect, useRef, useState } from 'react'
// import TodoForm from './components/todo/TodoForm'
// import './App.css'

// const App = () => {
//   const [todos, setTodos] = useState([])
//   const isFirstRender = useRef(true);

//   // Load from localStorage on first render
//   useEffect(() => {
//   try {
//     const savedTodos = JSON.parse(localStorage.getItem('todos'));
//     if (Array.isArray(savedTodos)) {
//       setTodos(savedTodos);
//     }
//   } catch (error) {
//     console.error("Failed to parse todos from localStorage", error);
//     localStorage.removeItem('todos'); // remove invalid data
//   }
// }, []);

//   // Save to localStorage on todos change
//   useEffect(() => {
//     if (isFirstRender.current) {
//       isFirstRender.current = false;
//       return; // 👈 skip first render
//     }
//     localStorage.setItem('todos', JSON.stringify(todos))
//   }, [todos])

//   // Add todo
//   const addTodo = (text) => {
//     const newTodo = {
//       id: Date.now(),
//       text,
//       completed: false
//     }
//     setTodos([newTodo, ...todos])
//   }

//   // Delete todo
//   const deleteTodo = (id) => {
//     const updatedTodos = todos.filter(todo => todo.id !== id)
//     setTodos(updatedTodos)
//   }

//   return (
//     <div className='app-container'>
//       <h1>Todo List</h1>
//       <TodoForm onAdd={addTodo} />

//       <ul className='todo-list'>
//         {todos.map((todo) => (
//           <li key={todo.id} className='todo-item'>
//             <span>{todo.text}</span>
//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App
