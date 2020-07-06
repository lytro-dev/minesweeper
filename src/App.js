import React, {useState} from 'react'

import './App.css'
import { Game } from './containers'
import {GameContext} from './contexts'

const App = () => {
  const [gameOver, setGameOver] = useState(false)
  const [gameWon, setGameWon] = useState(false)

  const value = {
    gameOver,
    setGameOver,
    gameWon,
    setGameWon
  }

  return (
    <div className="App">
      <GameContext.Provider value={value}>
        <Game />
      </GameContext.Provider>     
    </div>
  );
}

export default App;
