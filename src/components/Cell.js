import React, {useState, useEffect, useCallback, useContext} from 'react'

import {Svgs} from '../utils'
import {GameContext} from '../contexts'

const Cell = ({ cellProps: {
                    xCoordinate, yCoordinate, clicked, flagged, mined, missFlagged, numberOfNeighboringMines
                },
                firstCellClicked,
                distributeMines,
                revealAllMines,
                revealNeighboringEmptyCells,
                checkIfWon}) => {

    const [cellDisplay, setCellDisplay] = useState(null)
    const [startLongPress, setStartLongPress] = useState(false)
    const [steppedOnMine, setSteppedOnMine] = useState(false)

    const {gameOver, setGameOver} = useContext(GameContext)

    const renderCell = useCallback(() => {
        if(!clicked && !flagged) {setCellDisplay(null)}
        else if(clicked && mined && !flagged) {setCellDisplay(Svgs.mine)}
        else if(missFlagged && gameOver) {setCellDisplay(Svgs.crossedFlag)}
        else if(flagged) {setCellDisplay(Svgs.flag)}
        else if(clicked && !mined) {setCellDisplay(Svgs[numberOfNeighboringMines])}
    },[clicked, mined, numberOfNeighboringMines, flagged, missFlagged, gameOver])

    useEffect(()=> {
        renderCell()
    }, [clicked, renderCell])

    const toggleFlag = useCallback(() => {
        if(!clicked) {
            if(!flagged) {
                flagged = true
                missFlagged = !mined
            } else {
                flagged = false
            }
            renderCell()
        }
    }, [flagged, missFlagged, mined, clicked, renderCell])

    useEffect(() => {
        let timerId;
        if (startLongPress) {
          timerId = setTimeout(toggleFlag, 1000);
        } else {
          clearTimeout(timerId);
        }
    
        return () => {
          clearTimeout(timerId);
        };
      }, [startLongPress, clicked, flagged, toggleFlag]);

    const handleCellClick = () => {
        if(!gameOver && !flagged) {
           clicked = true;
            if(!firstCellClicked) {
                distributeMines()
            }
            renderCell()
            if(mined) {
                setGameOver(true)
                setSteppedOnMine(true)
                revealAllMines()
            } else if(!numberOfNeighboringMines) {
                revealNeighboringEmptyCells(xCoordinate, yCoordinate)
                checkIfWon()
            }
        }   
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        toggleFlag() 
    }

    return(<div className={`cell ${clicked ? '' : 'cell-unclicked'} ${steppedOnMine ? 'oops-mine' : ''}`}    
                                    onClick={handleCellClick}
                                    onContextMenu={handleRightClick}
                                    onMouseDown={() => setStartLongPress(true)}
                                    onMouseUp={() => setStartLongPress(false)}
                                    onMouseLeave={() => setStartLongPress(false)}
                                    onTouchStart={() => setStartLongPress(true)}
                                    onTouchEnd={() => setStartLongPress(false)} >
        {cellDisplay}
    </div>)
}

export default Cell