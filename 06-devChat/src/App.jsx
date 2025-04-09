import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useState } from 'react';
import Chat from './pages/Chat';
import Join from './pages/Join';

function App() {
  const [chatVisible, setChatVisibility] = useState(false);
  const [socket, setSocket] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#5dade2" : "#58d68d", // Pastel tones
      }}
      className={`m-0 vh-100 d-flex flex-column justify-content-center align-items-center ${
        isDarkMode ? "text-dark" : "text-dark"
      }`}
    >
      <button
        className="btn btn-light position-absolute top-0 end-0 m-3"
        style={{
          fontSize: "1.5rem", // Increase font size
          padding: "10px 20px", // Increase padding
        }}
        onClick={toggleTheme}
      >
        {isDarkMode ? "🌞" : "🌚"}
      </button>
      {chatVisible ? (
        <Chat socket={socket} />
      ) : (
        <Join setSocket={setSocket} visibility={setChatVisibility} />
      )}
    </div>
  );
}

export default App;
