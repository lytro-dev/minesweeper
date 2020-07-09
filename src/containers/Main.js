import React, {useContext} from 'react'

import {Game, StartView} from './'
import {GameContext} from '../contexts'

const Main = () => {

    const {gameWon, gameOver, gameStarted} = useContext(GameContext)

    return(<div>
        {!gameStarted && 
        <StartView />}
        {gameStarted && (!gameOver && !gameWon) && 
        <Game />}
    </div>)
}

export default Main