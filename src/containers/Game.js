import React from 'react'

import {MineField, StatsDisplay, Level} from '../components'

const Game = () => {

    return(<div className="game">
        <Level />
        <StatsDisplay />
        <MineField />
    </div>)
}

export default Game