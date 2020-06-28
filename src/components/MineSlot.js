import React, {useState} from 'react'

const MineSlot = ({ slotProps, 
                    slotsArray,
                    firstSlotClicked,
                    distributeMines}) => {

    const [slotDisplay, setSlotDisplay] = useState(null)

    const handleSlotClick = () => {
        slotProps.clicked = true;
        if(!firstSlotClicked) {
            distributeMines()
        }
        renderSlot()
        console.log(slotsArray)
    }

    const renderSlot = () => {
        if(slotProps.clicked && slotProps.mined) {setSlotDisplay("M")}
        else if(slotProps.clicked && !slotProps.mined) {setSlotDisplay("E")}
        // {(slotProps.clicked && slotProps.mined) && <div>M</div>}
        // {(slotProps.clicked && !slotProps.mined) && <div>E</div>}
        // {slotProps.disabled && "D"}
        // {slotProps.clicked && !slotProps.mined && renderNumberOfNeighboringMines()}
    }

    const renderNumberOfNeighboringMines = () => {
        console.log('rendering')
    }

    return(<div className="mine-slot" onClick={handleSlotClick}>
        {slotDisplay}
    </div>)
}

export default MineSlot