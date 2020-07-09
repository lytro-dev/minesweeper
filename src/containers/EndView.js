import React, { useContext, useMemo } from 'react'

import { GameContext } from '../contexts'

const EndView = () => {
    const {gameWon, gameOver, level, bestTimes, gameTime} = useContext(GameContext)

    const successMessages = ["Well done!", "Awesome job!", "You killed it!", "Nice Work!", "Sweet! Good job..", "Great work!"]
    const failMessages = ["Oops! Next time..", "Auch!!", "Good run. Better luck next time :)", "Ah well.. Good effort though"]

    const renderMessage = useMemo(()=>{
        
        if(gameWon) 
            return <>
                <div className="title-text">{successMessages[Math.floor(Math.random()*successMessages.length)]}</div>
                <div className="text-main">It took you {gameTime} seconds to solve it</div>
                <div className="text-main">Your fastest time for this level is: {bestTimes[level]} seconds</div>
            </>
        if(gameOver) 
        return <>
            <div className="title-text">{failMessages[Math.floor(Math.random()*failMessages.length)]}</div>
            {bestTimes[level] === 999 ? null : <div className="text-main">Your highest score for this level is: {bestTimes[level]}</div>}
        </> 
    }, [gameWon, gameOver])

    return(<div className="end-view">
        {renderMessage}  
    </div>)
}

export default EndView