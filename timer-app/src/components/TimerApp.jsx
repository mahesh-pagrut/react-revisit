import React, { useState, useEffect, useRef } from "react";

const TimerApp = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null); // Persist interval ID without causing re-renders

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup function
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div style={styles.container}>
      <h1>⏱️ Timer: {seconds} seconds</h1>
      <button onClick={handleStart} disabled={isRunning} style={styles.button}>
        Start Timer
      </button>
      <button onClick={handleStop} style={styles.button}>
        Stop Timer
      </button>
      <button onClick={handleReset} style={styles.button}>
        Reset
      </button>
    </div>
  );
};

// Optional styles for basic UI
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default TimerApp;
