import React, {useState, useEffect, useCallback, useContext} from 'react'

import {Svgs} from '../utils'
import {GameContext} from '../contexts'

const Cell = ({ cellProps,
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
        if(!cellProps.clicked && !cellProps.flagged) {setCellDisplay(null)}
        else if(cellProps.clicked && cellProps.mined && !cellProps.flagged) {setCellDisplay(Svgs.mine)}
        else if(cellProps.missFlagged && gameOver) {setCellDisplay(Svgs.crossedFlag)}
        else if(cellProps.flagged) {setCellDisplay(Svgs.flag)}
        else if(cellProps.clicked && !cellProps.mined) {setCellDisplay(Svgs[cellProps.numberOfNeighboringMines])}
    },[cellProps.clicked, cellProps.mined, cellProps.numberOfNeighboringMines, cellProps.flagged, cellProps.missFlagged, gameOver])

    useEffect(()=> {
        renderCell()
    }, [cellProps.clicked, renderCell])

    const toggleFlag = useCallback(() => {
        if(!cellProps.clicked) {
            if(!cellProps.flagged) {
                cellProps.flagged = true
                cellProps.missFlagged = !cellProps.mined
            } else {
                cellProps.flagged = false
            }
            renderCell()
        }
    }, [cellProps.flagged, cellProps.missFlagged, cellProps.mined, cellProps.clicked, renderCell])

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
      }, [startLongPress, cellProps.clicked, cellProps.flagged, toggleFlag]);

    const handleCellClick = () => {
        if(!gameOver && !cellProps.flagged) {
           cellProps.clicked = true;
            if(!firstCellClicked) {
                distributeMines()
            }
            renderCell()
            if(cellProps.mined) {
                setGameOver(true)
                setSteppedOnMine(true)
                revealAllMines()
            } else if(!cellProps.numberOfNeighboringMines) {
                revealNeighboringEmptyCells(cellProps.xCoordinate, cellProps.yCoordinate)
                checkIfWon()
            }
        }   
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        toggleFlag() 
    }

    return(<div className={`cell ${cellProps.clicked ? '' : 'cell-unclicked'} ${steppedOnMine ? 'oops-mine' : ''}`}    
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