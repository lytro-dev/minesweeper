import React, {useState, useEffect} from 'react'

const Cell = ({ cellProps, 
                    mineFieldArray,
                    firstCellClicked,
                    distributeMines,
                    revealAllMines,
                    revealNeighboringEmptyCells}) => {

    const [slotDisplay, setSlotDisplay] = useState(null)

    useEffect(()=> {
        renderCell()
    }, [cellProps.clicked])

    const handleSlotClick = () => {
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
        if(cellProps.clicked && cellProps.mined) {setSlotDisplay("M")}
        else if(cellProps.clicked && !cellProps.mined) {setSlotDisplay(cellProps.numberOfNeighboringMines)}
        // {cellProps.disabled && "D"}
        // {cellProps.clicked && !cellProps.mined && renderNumberOfNeighboringMines()}
    }

    return(<div className="mine-slot" onClick={handleSlotClick}>
        {slotDisplay}
    </div>)
}

export default Cell