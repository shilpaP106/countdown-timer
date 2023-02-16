import React, { useState, useRef, useEffect } from 'react';
import './App.css'
function App() {
  const [count, setCount] = useState(null);
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    if (count === 0) {
      setIsCountdownComplete(true);
      clearInterval(countRef.current);
    }
  }, [count]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const value = parseInt(event.target.value);
      if (isNaN(value) || value < 0) {
        setCount(0);
        setIsCountdownComplete(true);
      } else {
        setCount(Math.floor(value));
        setIsCountdownComplete(false);
        countRef.current = setInterval(() => {
          setCount((prevCount) => prevCount - 1);
        }, 1000);
      }
    }
 };

  return (
    <>
      <header>
        <h1>Countdown Timer</h1>
      </header>
      <main className="container">
        <input type="number" name="time" id="time" onKeyDown={handleKeyDown} />
        <div id="current-time">{count !== null && count}</div>
        {isCountdownComplete && <div id="countdown-complete">Countdown Complete!</div>}
      </main>
    </>
  );
}

export default App;
