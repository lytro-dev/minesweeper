import React, {useContext} from 'react'

import { GameContext } from '../contexts'

const Level: React.FC = () => {
    const {level} = useContext(GameContext)

    return(<div className="title-text">
        Level: {level[0] + level.slice(1).toLowerCase()}
    </div>)
}

export default Level