import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const currentTime = `${hours}:${minutes}:${seconds}`;

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      <header className="app-header">
        <h1>Digital Clock</h1>
        <div className="clock">{currentTime}</div>
        <button onClick={toggleDarkMode} className="mode-toggle">
          Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
    </div>
  );
}

export default App;
