import React, { useContext } from 'react'

import { GameContext } from '../contexts'

const StartView: React.FC = () => {
    const { bestTimes, setGameStarted } = useContext(GameContext)

    return(<div className="start-view">
        <div className="title-text">Minesweeper game</div>
        <div className="secondary-title-text">Top times</div>
        <div className="text-main start-view-times">
            <div>{`Beginner: ${bestTimes.BEGINNER === 999 ? "(Haven't cracked that one yet)" : `${bestTimes.BEGINNER} seconds`}`}</div>
            <div>{`Intermediate: ${bestTimes.INTERMEDIATE === 999 ? "(Haven't cracked that one yet)" : `${bestTimes.INTERMEDIATE} seconds`}`}</div>
            <div>{`Expert: ${bestTimes.EXPERT === 999 ? "(Haven't cracked that one yet)" : `${bestTimes.EXPERT} seconds`}`}</div>
        </div>
        <button className="button-main" onClick={() => setGameStarted(true)}>Start Game</button>
    </div>)
}

export default StartView