import React, { useContext } from 'react'

import { GameContext } from '../contexts'
import { LevelsEnum } from '../utils'

const LevelButtons = () => {

    const {setLevel, setResetGame, setGameOver, setGameWon, setNumberOfRemainingMines} = useContext(GameContext)

    const handleLevelClick = (level) => {
        setLevel(level)
        setNumberOfRemainingMines(LevelsEnum[level].numberOfMines)
        setResetGame(true)
        setGameOver(false)
        setGameWon(false)
    }

    return(<div className="level-buttons">
        <button className="button-main" onClick={() => handleLevelClick('beginner')}>Beginner</button>
        <button className="button-main" onClick={() => handleLevelClick('intermediate')}>Intermediate</button>
        <button className="button-main" onClick={() => handleLevelClick('expert')}>Expert</button>
    </div>)
}

export default LevelButtons