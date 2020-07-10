import React, { useContext } from 'react'

import { GameContext } from '../contexts'
import { LevelsEnum } from '../utils'

const LevelButtons = () => {

    const {setLevel, setResetGame, setNumberOfRemainingMines} = useContext(GameContext)

    const handleBeginnerClick = () => {
        setLevel('beginner')
        setResetGame(true)
        setNumberOfRemainingMines(LevelsEnum.beginner.numberOfMines)
    }

    const handleIntermediateClick = () => {
        setLevel('intermediate')
        setResetGame(true)
        setNumberOfRemainingMines(LevelsEnum.intermediate.numberOfMines)
    }

    const handleExpertClick = () => {
        setLevel('expert')
        setResetGame(true)
        setNumberOfRemainingMines(LevelsEnum.expert.numberOfMines)
    }

    return(<div className="level-buttons">
        <button className="button-main" onClick={handleBeginnerClick}>Beginner</button>
        <button className="button-main" onClick={handleIntermediateClick}>Intermediate</button>
        <button className="button-main" onClick={handleExpertClick}>Expert</button>
    </div>)
}

export default LevelButtons