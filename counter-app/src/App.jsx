import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleInc = () => {
    setCount((prev) => prev +1 )
  }

  const handleDec = () => {
    setCount((prev) => prev - 1 )
  }

  const handleReset = () => {
    setCount(0)
  }


  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
