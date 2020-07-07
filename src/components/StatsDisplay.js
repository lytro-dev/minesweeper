import React, { useState, useEffect, useContext } from 'react';

import {GameContext} from '../contexts';

const StatsDisplay = () => {
    const [time, setTime] = useState(0)
    const {gameWon, gameOver} = useContext(GameContext)

    useEffect(()=>{
        let interval
        if(!gameOver || !gameWon) {
            interval = setInterval(()=>{
            if(gameOver || gameWon) {
                clearInterval(interval)
            }
            setTime(prevState => prevState + 1)  
        }, 1000)
        }   
        return () => {if (interval) clearInterval(interval)}
    }, [gameOver, gameWon])


    return(<div className="stats-display">
        <div>{time}</div>
    </div>)
}

export default StatsDisplay