import React, { useState } from 'react'
import '../Todo/Todo.css'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [loaded, setLoaded] = useState(false)
  return (
    <div className='container'>
      <div className='card'>
        <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.title.value)}
        placeholder='type your todo'
        className='input'
        />
        <button className='button'>Add Todo</button>
      </div>
    </div>
  )
}

export default Todo