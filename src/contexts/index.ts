import {createContext} from 'react'
import {LevelNames, LevelsEnum} from '../utils/index'

const value: Context = {
  gameOver: false,
  setGameOver: ()=>{},
  gameWon: false,
  setGameWon: ()=>{},
  gameStarted: false,
  setGameStarted: ()=>{},
  level: LevelNames.BEGINNER,
  setLevel: ()=>{},
  numberOfRemainingMines: LevelsEnum[LevelNames.BEGINNER].numberOfMines,
  setNumberOfRemainingMines: ()=>{},
  bestTimes: {BEGINNER: 999, INTERMEDIATE: 999, EXPERT: 999},
  setBestTimes: ()=>{},
  gameTime: 0,
  setGameTime: ()=>{},
  resetGame: false,
  setResetGame: ()=>{}
}

const GameContext = createContext(value)

export {
    GameContext
}