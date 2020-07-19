import React, {useState, useEffect} from 'react'

import './App.css'
import {Main} from './containers'
import {GameContext} from './contexts'
import {LevelsEnum, LevelNames} from './utils'
import { BestTimes, Context } from './types'

const App: React.FC = () => {
  const [gameOver, setGameOver] = useState(false)
  const [gameWon, setGameWon] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [level, setLevel] = useState(LevelNames.BEGINNER)
  const [numberOfRemainingMines, setNumberOfRemainingMines] = useState(LevelsEnum[level].numberOfMines)
  const [bestTimes, setBestTimes] = useState<BestTimes>({BEGINNER: 999, INTERMEDIATE: 999, EXPERT: 999})
  const [gameTime, setGameTime] = useState(0)
  const [resetGame, setResetGame] = useState(false)

  const value: Context = {
    gameOver,
    setGameOver,
    gameWon,
    setGameWon,
    gameStarted,
    setGameStarted,
    level,
    setLevel,
    numberOfRemainingMines,
    setNumberOfRemainingMines,
    bestTimes,
    setBestTimes,
    gameTime,
    setGameTime,
    resetGame,
    setResetGame
  }

  useEffect(()=>{
    const bestTimes = localStorage.getItem('mineSweeperScores')
    if(bestTimes) {
      setBestTimes(JSON.parse(bestTimes))
    }
  }, [])

  return (
    <div className="App">
      <GameContext.Provider value={value}>
        <Main />
      </GameContext.Provider>     
    </div>
  );
}

export default App;
