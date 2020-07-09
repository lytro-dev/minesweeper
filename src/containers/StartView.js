import React, { useContext } from 'react'

import { GameContext } from '../contexts'

const StartView = () => {
    const { bestTimes, setGameStarted } = useContext(GameContext)

    return(<div className="start-view">
        <div className="title-text">Minesweeper game</div>
        <div className="secondary-title-text">Top times</div>
        <div className="text-main start-view-times">
            <div>{`Beginner: ${bestTimes.beginner === 999 ? "(Haven't cracked that one yet)" : `${bestTimes.beginner} seconds`}`}</div>
            <div>{`Intermediate: ${bestTimes.intermediate === 999 ? "(Haven't cracked that one yet)" : `${bestTimes.intermediate} seconds`}`}</div>
            <div>{`Expert: ${bestTimes.expert === 999 ? "(Haven't cracked that one yet)" : `${bestTimes.expert} seconds`}`}</div>
        </div>
        <button className="button-main" onClick={() => setGameStarted(true)}>Start Game</button>
    </div>)
}

export default StartView