import React, {useContext} from 'react'

import {Game, StartView} from './'
import {GameContext} from '../contexts'

const Main = () => {

    const {gameWon, gameOver} = useContext(GameContext)

    return(<div>
        <StartView />
        <Game />
    </div>)
}

export default Main