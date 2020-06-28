import React, {useState} from 'react'

import MineSlot from './MineSlot'

const MineFieldBeginner = () => {
    const [firstSlotClicked, setFirstSlotClicked] = useState(false)
    const gameVariants = Object.freeze({
        beginner: {
            width: 9,
            height: 9,
            numberOfMines: 10
        }
    })
    const slotsArray = []

    const distributeMines = () => {
        console.log("distributing mines")
        let numberOfMinesToDistribute = gameVariants.beginner.numberOfMines
        while(numberOfMinesToDistribute>0) {
            let randomRow = slotsArray[Math.floor(Math.random()*slotsArray.length)]
            let randomSlot = randomRow[Math.floor(Math.random()*randomRow.length)]
            if(!randomSlot.clicked && !randomSlot.mined) {
                randomSlot.mined = true
                numberOfMinesToDistribute--
            }         
        }
        console.log(slotsArray)
        setFirstSlotClicked(true)
    }

    const buildSlotsArray = () => {
        for(let y = 0; y <gameVariants.beginner.width; y++) {
            let rowArray = []
            for(let x = 0; x < gameVariants.beginner.height; x++){    
                rowArray.push({
                    xCoordinate: x,
                    yCoordinate: y,
                    mined: false,
                    clicked: false,
                    disabled: false
                })
                
            }
            slotsArray.push(rowArray)
        }
    }

    buildSlotsArray()
    
    const renderMineSlots = () => {
        return slotsArray.map(row => 
            row.map(slot => <MineSlot   key={`${slot.xCoordinate}${slot.yCoordinate}`} 
                                        slotProps={slot} 
                                        slotsArray={slotsArray}
                                        firstSlotClicked={firstSlotClicked}
                                        setFirstSlotClicked={setFirstSlotClicked}
                                        distributeMines={distributeMines}/>))
    }

    return(<div className="mine-field-beginner">
         {renderMineSlots()}
        </div>)
}

export default MineFieldBeginner