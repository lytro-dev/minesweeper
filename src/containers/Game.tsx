import React, { useContext } from 'react'

import { MineField, StatsDisplay, Level, LevelButtons } from '../components'

import { GameContext } from '../contexts'
import { LevelsEnum } from '../utils'

const Game: React.FC = () => {

    const { setGameOver, setGameWon, setResetGame, setNumberOfRemainingMines, level } = useContext(GameContext)

    const handleReplayClick = (): void => {
        setResetGame(true)
        setGameOver(false)
        setGameWon(false)
        setNumberOfRemainingMines(LevelsEnum[level].numberOfMines)
    }

    return(<div className="game">
        <Level />
        <button className="button-main" onClick={handleReplayClick}>Replay</button>
        <StatsDisplay />
        <MineField />
        <LevelButtons />
    </div>)
}

export default Game