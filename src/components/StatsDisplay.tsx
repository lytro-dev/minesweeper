import React, { useState, useEffect, useContext } from 'react';

import {GameContext} from '../contexts';

const StatsDisplay: React.FC = () => {
    const [time, setTime] = useState(0)
    const {gameWon, gameOver, numberOfRemainingMines, level, bestTimes, setBestTimes, setGameTime, resetGame, setResetGame} = useContext(GameContext)
    
    useEffect(()=>{
        setTime(0)
        setGameTime(0)
        setResetGame(false)
    }, [resetGame])

    useEffect(()=>{
        let interval: NodeJS.Timer
        if(!gameOver || !gameWon) {
            interval = setInterval(()=>{
            if(gameOver || gameWon) {
                clearInterval(interval)
                setGameTime(time)
                if(gameWon) {
                    if(time < bestTimes[level]) {
                        const updatedBestTimes = {...bestTimes, [level]: time}
                        setBestTimes(updatedBestTimes)
                        localStorage.setItem('mineSweeperScores', JSON.stringify(updatedBestTimes))
                    }  
                }
            }
            setTime(prevState => prevState + 1)  
        }, 1000)
        }   
        return () => {if(interval) clearInterval(interval)}
    }, [gameOver, gameWon, time, setGameTime, setBestTimes, bestTimes, level, setResetGame])


    return(<div className="stats-display">
        <div></div>
        <div>
            <div>Time</div>
            <div>{time}</div>
        </div>
        <div>
            <div>Remaining mines</div>
            <div>{numberOfRemainingMines}</div>
        </div>
        <div>
            <div>Your Best Time</div>
            <div>{bestTimes[level]===999? 'NA': `${bestTimes[level]} seconds`}</div>
        </div>
        <div></div>
    </div>)
}

export default StatsDisplay