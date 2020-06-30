import React, {useState, useEffect} from 'react'

import {Svgs} from '../utils'

const Cell = ({ cellProps, 
                mineFieldArray,
                firstCellClicked,
                distributeMines,
                revealAllMines,
                revealNeighboringEmptyCells,
                gameOver,
                setGameOver}) => {

    const [cellDisplay, setCellDisplay] = useState(null)

    useEffect(()=> {
        renderCell()
    }, [cellProps.clicked])

    const handleCellClick = () => {
        if(!gameOver) {
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

    const renderCell = () => {
        if(cellProps.clicked && cellProps.mined) {setCellDisplay(Svgs.mine)}
        else if(cellProps.clicked && !cellProps.mined) {setCellDisplay(Svgs[cellProps.numberOfNeighboringMines])}
        // {cellProps.disabled && "D"}
        // {cellProps.clicked && !cellProps.mined && renderNumberOfNeighboringMines()}
    }

    return(<div className="cell" onClick={handleCellClick}>
        {cellDisplay}
    </div>)
}

export default Cell