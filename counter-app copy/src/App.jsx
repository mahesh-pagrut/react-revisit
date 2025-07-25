import React, { useState } from 'react'


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>decrement</button>
      <button onClick={() => setCount((prev) => prev = 0)}>reset</button>
    </div>
  )
}

export default App