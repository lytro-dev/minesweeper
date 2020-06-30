import React, {useState, useEffect} from 'react'

import {Svgs} from '../utils'

const Cell = ({ cellProps, 
                    mineFieldArray,
                    firstCellClicked,
                    distributeMines,
                    revealAllMines,
                    revealNeighboringEmptyCells}) => {

    const [cellDisplay, setCellDisplay] = useState(null)

    useEffect(()=> {
        renderCell()
    }, [cellProps.clicked])

    const handleCellClick = () => {
        cellProps.clicked = true;
        if(!firstCellClicked) {
            distributeMines()
        }
        renderCell()
        if(cellProps.mined) {
            revealAllMines()
        }
        if(!cellProps.numberOfNeighboringMines) {
            revealNeighboringEmptyCells(cellProps.xCoordinate, cellProps.yCoordinate)
        }
        console.log(mineFieldArray)
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