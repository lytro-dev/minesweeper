import React, { useContext, useMemo } from 'react'

import { GameContext } from '../contexts'

const EndView: React.FC = () => {
    const { gameWon, gameOver } = useContext(GameContext)

    const successMessages = ["Well done!", "Awesome job!", "You killed it!", "Nice Work!", "Sweet! Good job..", "Great work!"]
    const failMessages = ["Oops! Next time..", "Auch!!", "Good run. Better luck next time :)", "Ah well.. Good effort though"]

    const renderMessage = useMemo(()=>{
        
        if(gameWon) 
            return <>
                <div className="title-text">{successMessages[Math.floor(Math.random()*successMessages.length)]}</div>
            </>
        if(gameOver) 
        return <>
            <div className="title-text">{failMessages[Math.floor(Math.random()*failMessages.length)]}</div>
        </> 
    }, [gameWon, gameOver])

    return(<div className="end-view">
        {renderMessage}  
    </div>)
}

export default EndView