import React, {useState} from 'react'

import './App.css'
import { Game } from './containers'
import {GameContext} from './contexts'
import {LevelsEnum} from './utils'

const App = () => {
  const [gameOver, setGameOver] = useState(false)
  const [gameWon, setGameWon] = useState(false)
  const [level, setLevel] = useState('beginner')
  const [numberOfRemainingMines, setNumberOfRemainingMines] = useState(LevelsEnum[level].numberOfMines)

  const value = {
    gameOver,
    setGameOver,
    gameWon,
    setGameWon,
    level,
    setLevel,
    numberOfRemainingMines,
    setNumberOfRemainingMines
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
