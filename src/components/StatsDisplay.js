import React, { useState, useEffect, useContext, useCallback } from 'react';

import {GameContext} from '../contexts';

const StatsDisplay = () => {
    const [time, setTime] = useState(0)
    const {gameWon, gameOver} = useContext(GameContext)

    const startTimer = useCallback(() => {
        if(!gameOver || !gameWon) {
            const interval = setInterval(()=>{
            setTime(prevState => prevState + 1)
            console.log('gameOver', gameOver)
            if(gameOver || gameWon) {
                console.log("inside if block", gameOver)
                clearInterval(interval)
            }
        }, 1000)
        }   
    }, [gameOver, gameWon])


    useEffect(()=>{
        startTimer()
    }, [startTimer])


    return(<div className="stats-display">
        <div>{time}</div>
    </div>)
}

export default StatsDisplay