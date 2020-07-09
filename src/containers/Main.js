import React, { useContext } from 'react'

import { Game, StartView, EndView } from './'
import { GameContext } from '../contexts'

const Main = () => {

    const { gameStarted } = useContext(GameContext)

    return(<div>
        {!gameStarted && 
        <StartView />}
        {gameStarted && 
        <>
            <Game />
            <EndView />
        </>}
    </div>)
}

export default Main