import React, {useState, useEffect} from 'react'

const MineSlot = ({ slotProps, 
                    slotsArray,
                    firstSlotClicked,
                    distributeMines,
                    revealAllSlots,
                    revealNeighboringSlots}) => {

    const [slotDisplay, setSlotDisplay] = useState(null)

    useEffect(()=> {
        renderSlot()
    }, [slotProps.clicked])

    const handleSlotClick = () => {
        slotProps.clicked = true;
        if(!firstSlotClicked) {
            distributeMines()
        }
        renderSlot()
        if(slotProps.mined) {
            revealAllSlots()
        }
        if(!slotProps.numberOfNeighboringMines) {
            revealNeighboringSlots(slotProps.xCoordinate, slotProps.yCoordinate)
        }
        console.log(slotsArray)
    }

    const renderSlot = () => {
        if(slotProps.clicked && slotProps.mined) {setSlotDisplay("M")}
        else if(slotProps.clicked && !slotProps.mined) {setSlotDisplay(slotProps.numberOfNeighboringMines)}
        // {slotProps.disabled && "D"}
        // {slotProps.clicked && !slotProps.mined && renderNumberOfNeighboringMines()}
    }

    return(<div className="mine-slot" onClick={handleSlotClick}>
        {slotDisplay}
    </div>)
}

export default MineSlot