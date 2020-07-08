import React, {useContext} from 'react'

import { GameContext } from '../contexts'

const Level = () => {
    const {level} = useContext(GameContext)

    return(<div className="level-text">
        Level: {level[0].toUpperCase() + level.slice(1)}
    </div>)
}

export default Level