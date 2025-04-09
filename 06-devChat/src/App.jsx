import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useState } from 'react';
import Chat from './pages/Chat';
import Join from './pages/Join';


function App() {
const [chatVisible, setChatVisibility] = useState(false);
const [socket, setSocket] = useState(null);

  return (
    <div className='m-0 vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light'>
    {chatVisible ? (<Chat socket={socket} /> ): (<Join setSocket={setSocket} visibility = {setChatVisibility} /> )}
    </div>
  )
}

export default App;
