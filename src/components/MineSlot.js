import React from 'react'

const MineSlot = ({slotProps: {xCoordinate, yCoordinate, mined, clicked, disabled}, 
                    slotsArray,
                    firstSlotClicked,
                    distributeMines}) => {

    const handleSlotClick = () => {
        console.log("handling click")
        if(!firstSlotClicked) {
            distributeMines()
        }
    }

    const renderNumberOfNeighboringMines = () => {
        console.log('rendering')
    }

    return(<div className="mine-slot" onClick={handleSlotClick}>
        {clicked && mined && "M"}
        {disabled && "D"}
        {clicked && !mined && renderNumberOfNeighboringMines()}
    </div>)
}

export default MineSlot