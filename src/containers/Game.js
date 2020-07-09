import React, { useContext } from 'react'

import { MineField, StatsDisplay, Level } from '../components'

import { GameContext } from '../contexts'

const Game = () => {

    const { setGameOver, setGameWon, setResetGame } = useContext(GameContext)

    const handleReplayClick = () => {
        setResetGame(true)
        setGameOver(false)
        setGameWon(false)
    }

    return(<div className="game">
        <Level />
        <button className="button-main" onClick={handleReplayClick}>Replay</button>
        <StatsDisplay />
        <MineField />
    </div>)
}

export default Game