import React, {useState, useEffect} from 'react'

import MineSlot from './MineSlot'

const MineFieldBeginner = () => {
    const [firstSlotClicked, setFirstSlotClicked] = useState(false)
    const [slotsArray, setSlotsArray] = useState([])
    const gameVariants = Object.freeze({
        beginner: {
            width: 9,
            height: 9,
            numberOfMines: 10
        }
    })
    
    useEffect(()=>{
        buildSlotsArray()
    }, [])

    const distributeMines = () => {
        let numberOfMinesToDistribute = gameVariants.beginner.numberOfMines
        const slotsArrayCopy = [...slotsArray]
        while(numberOfMinesToDistribute>0) {
            let randomRow = slotsArrayCopy[Math.floor(Math.random()*slotsArrayCopy.length)]
            let randomSlot = randomRow[Math.floor(Math.random()*randomRow.length)]
            if(!randomSlot.clicked && !randomSlot.mined) {
                randomSlot.mined = true
                numberOfMinesToDistribute--
            }         
        }
        slotsArrayCopy.forEach(row => {
            row.forEach(slot => {
                if(!slot.mined) {
                    let count = 0
                    if(slotsArrayCopy?.[slot.yCoordinate]?.[slot.xCoordinate-1]?.mined) {count++}
                    if(slotsArrayCopy?.[slot.yCoordinate]?.[slot.xCoordinate+1]?.mined) {count++}
                    if(slotsArrayCopy?.[slot.yCoordinate-1]?.[slot.xCoordinate-1]?.mined) {count++}
                    if(slotsArrayCopy?.[slot.yCoordinate-1]?.[slot.xCoordinate]?.mined) {count++}
                    if(slotsArrayCopy?.[slot.yCoordinate-1]?.[slot.xCoordinate+1]?.mined) {count++}
                    if(slotsArrayCopy?.[slot.yCoordinate+1]?.[slot.xCoordinate-1]?.mined) {count++}
                    if(slotsArrayCopy?.[slot.yCoordinate+1]?.[slot.xCoordinate]?.mined) {count++}
                    if(slotsArrayCopy?.[slot.yCoordinate+1]?.[slot.xCoordinate+1]?.mined) {count++}
                    slot.numberOfNeighboringMines = count
                }
            })
        })
        setSlotsArray(slotsArrayCopy)
        setFirstSlotClicked(true)
    }

    const buildSlotsArray = () => {
        const slotsArray = []
        for(let y = 0; y <gameVariants.beginner.width; y++) {
            let rowArray = []
            for(let x = 0; x < gameVariants.beginner.height; x++){    
                rowArray.push({
                    xCoordinate: x,
                    yCoordinate: y,
                    mined: false,
                    clicked: false,
                    disabled: false,
                    numberOfNeighboringMines: 0
                })
                
            }
            slotsArray.push(rowArray)
        }
        setSlotsArray(slotsArray)
    }

    const revealAllSlots = () => {
        const slotsArrayCopy = [...slotsArray]
        slotsArrayCopy.forEach(
            row => row.forEach(
                slot => {
                    slot.clicked = true
                }
        ))
        setSlotsArray(slotsArrayCopy)
    }
    
    const renderMineSlots = () => {
        return slotsArray.map(row => 
            row.map(slot => <MineSlot   key={`${slot.xCoordinate}${slot.yCoordinate}`} 
                                        slotProps={slot} 
                                        slotsArray={slotsArray}
                                        firstSlotClicked={firstSlotClicked}
                                        setFirstSlotClicked={setFirstSlotClicked}
                                        distributeMines={distributeMines}
                                        revealAllSlots={revealAllSlots}/>))
    }

    return(<div className="mine-field-beginner">
         {renderMineSlots()}
        </div>)
}

export default MineFieldBeginner