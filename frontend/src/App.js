import {useState} from 'react';
import './App.css';

import Dashboard from './components/Dashboard';
import CreateRoom from './components/Creation';
import ChatRoom from './components/Chat';

function App() {
  const [view, setView] = useState('home');

  return (
    <div className="App">
      <div className="navbar">
        <a href="#home" onClick={() => setView('home')} style={{
          marginRight: 48
        }}>Chat App</a>
        <a href="#home" onClick={() => setView('home')}>
          Dashboard
        </a>
        <a href="#create" onClick={() => setView('create')}>
          Create Room
        </a>
      </div>
      <div className="App-Body">
        {
          view === 'home' ? (<Dashboard setChat={
            () => setView('chat')
          }/>) : null
        }
        {
          view === 'create' ? (<CreateRoom/>) : null
        }
        {
          view === 'chat' ? (<ChatRoom/>) : null
        }
      </div>
    </div>
  );
}

export default App;
