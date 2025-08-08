import React from 'react';
import Navbar from './components/Navbar';
import GuessTheColorGame from './components/GuessTheColorGame';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GuessTheColorGame />
    </div>
  );
}

export default App;
