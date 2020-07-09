import React from 'react'

import {MineField, StatsDisplay, Level} from '../components'

const Game = () => {

    return(<div className="game">
        <Level />
        <button className="button-main">Replay</button>
        <StatsDisplay />
        <MineField />
    </div>)
}

export default Game