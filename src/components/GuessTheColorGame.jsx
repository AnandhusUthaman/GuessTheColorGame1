import React, { useState, useEffect } from 'react';
import './GuessTheColorGame.css';

const GuessTheColorGame = () => {
  const [colors, setColors] = useState([]);
  const [pickedColor, setPickedColor] = useState('');
  const [numSquares, setNumSquares] = useState(6);
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);
  const [gameMode, setGameMode] = useState('easy');

  const generateRandomColors = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(makeColor());
    }
    return arr;
  };

  const chooseColor = (colors) => {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
  };

  const makeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const resetGame = () => {
    const newColors = generateRandomColors(numSquares);
    const newPickedColor = chooseColor(newColors);
    setColors(newColors);
    setPickedColor(newPickedColor);
    setMessage('');
  };

  const handleSquareClick = (color) => {
    if (color === pickedColor) {
      setMessage('Correct!');
      setScore(prevScore => prevScore + 1);
      changeColors(color);
    } else {
      setMessage('Try Again');
    }
  };

  const changeColors = (color) => {
    setColors(colors.map(() => color));
  };

  const handleModeClick = (mode) => {
    const newNumSquares = mode === 'easy' ? 3 : 6;
    setNumSquares(newNumSquares);
    setGameMode(mode);
    resetGame();
  };

  const handleReset = () => {
    resetGame();
  };

  useEffect(() => {
    resetGame();
  }, []);

  return (
    <div className="gth-game">
      <div className="score-display">
        Score: {score}
      </div>
      <h1>
        Guess by <span id="color-display">{pickedColor}</span>
      </h1>
      <div className="stripe">
        <button onClick={handleReset}>New Colors</button>
        <span id="message">{message}</span>
        <button 
          className={`mode ${gameMode === 'easy' ? 'selected' : ''}`}
          onClick={() => handleModeClick('easy')}
        >
          Easy
        </button>
        <button 
          className={`mode ${gameMode === 'hard' ? 'selected' : ''}`}
          onClick={() => handleModeClick('hard')}
        >
          Hard
        </button>
      </div>
      <div className="container" id="container">
        {colors.map((color, index) => (
          <div
            key={index}
            className="square"
            style={{ backgroundColor: color }}
            onClick={() => handleSquareClick(color)}
          />
        ))}
      </div>
    </div>
  );
};
export default GuessTheColorGame;
