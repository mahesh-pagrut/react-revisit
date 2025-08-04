import React, { useEffect, useState } from 'react'
import '../Todo/Todo.css'

const Todo = () => {
    const [title, setTitle] = useState("")
    const [todos, setTodos] = useState([])
    const [loaded,setLoaded] = useState(false)

    const addTodo = () => {
        if (title.trim() === "") return;
        setTodos((prev) => [...prev, { id: Date.now(), status: "pending", title }])
        setTitle("")
    }

    const delTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id != id))

    }

    const handleStatus = (id, newStatus) => {
        setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, status: newStatus } : todo))
    }


    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        
        if (storedTodos) {
            console.log(storedTodos);
            setTodos(JSON.parse(storedTodos))
        }
        setLoaded(true)
    }, [])

    useEffect(() => {
        if(loaded){
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    }, [todos,loaded])

    return (
        <div className='container'>
            <div className='card'>
                <input
                    type='text'
                    value={title}
                    placeholder='type your todo...'
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className='button' onClick={addTodo}>add</button>
            </div>
            <div>
                {todos.map((el) => (
                    <ul key={el.id}>
                        <li>{el.title}</li>
                        <select value={el.status} onChange={(e) => handleStatus(el.id, e.target.value)}>
                            <option value="pending">Pending</option>
                            <option value="inProgress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                        <button onClick={() => delTodo(el.id, el.title)}>Delete</button>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default Todo