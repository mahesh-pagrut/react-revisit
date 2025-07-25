import React, { useState } from 'react'
import '../todo/TodoForm.css'

const TodoForm = ({onAdd}) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!input.trim()) return;
    onAdd(input.trim())
    setInput("")
  }
    
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input
        type='text'
        value={input}
        placeholder='Add a new task...'
        onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default TodoForm