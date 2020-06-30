import React, {useState, useEffect, useCallback} from 'react'

import {Svgs} from '../utils'

const Cell = ({ cellProps,
                firstCellClicked,
                distributeMines,
                revealAllMines,
                revealNeighboringEmptyCells,
                gameOver,
                setGameOver}) => {

    const [cellDisplay, setCellDisplay] = useState(null)
    const [startLongPress, setStartLongPress] = useState(false)

    const renderCell = useCallback(() => {
        if(!cellProps.clicked && !cellProps.flagged) {setCellDisplay(null)}
        else if(cellProps.clicked && cellProps.mined) {setCellDisplay(Svgs.mine)}
        else if(cellProps.flagged) {setCellDisplay(Svgs.flag)}
        else if(cellProps.clicked && !cellProps.mined) {setCellDisplay(Svgs[cellProps.numberOfNeighboringMines])}
    },[cellProps.clicked, cellProps.mined, cellProps.numberOfNeighboringMines, cellProps.flagged])

    useEffect(()=> {
        renderCell()
    }, [cellProps.clicked, renderCell])

    useEffect(() => {
        let timerId;
        if (startLongPress) {
          timerId = setTimeout(()=>{
              if(!cellProps.clicked) {cellProps.flagged = !cellProps.flagged}
          }, 1000);
        } else {
          clearTimeout(timerId);
        }
    
        return () => {
          clearTimeout(timerId);
        };
      }, [startLongPress, cellProps.clicked, cellProps.flagged]);

    const handleCellClick = () => {
        if(!gameOver && !cellProps.flagged) {
           cellProps.clicked = true;
            if(!firstCellClicked) {
                distributeMines()
            }
            renderCell()
            if(cellProps.mined) {
                setGameOver(true)
                revealAllMines()
            } else if(!cellProps.numberOfNeighboringMines) {
                revealNeighboringEmptyCells(cellProps.xCoordinate, cellProps.yCoordinate)
            } 
        }   
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        if(!cellProps.clicked){
            cellProps.flagged = !cellProps.flagged
            renderCell()
        }    
    }

    return(<div className="cell"    onClick={handleCellClick}
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