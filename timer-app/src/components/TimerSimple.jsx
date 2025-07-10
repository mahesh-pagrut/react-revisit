import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const TimerSimple = () => {

    const [seconds, setSeconds] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        let timer;
        if(running) {
            timer = setInterval(() =>{
                setSeconds((prev) => prev+=1)
            }, 1000)
        }
        return () => clearInterval(timer)
    }, [running])

  return (
    <div>
        <h1>{seconds} - seconds</h1>
        <button onClick={() => setRunning(true)} disabled={running}>start</button>
        <button onClick={() => setRunning(false)}>stop</button>
        <button onClick={() => {setRunning(false); setSeconds(0)}}>reset</button>
    </div>
  )
}

export default TimerSimple