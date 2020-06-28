import React from 'react'

import MineSlot from './MineSlot'

const MineFieldBeginner = () => {

    const gameVariants = Object.freeze({
        beginner: {
            width: 9,
            height: 9,
            numberOfMines: 10
        }
    })

    const alphabets = "abcdefghijklmnopqrstuvwxyz"
    const slotsArray = []

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
        console.info(slotsArray)
    }

    buildSlotsArray()
    
    const renderMineSlots = () => {
        return slotsArray.map(row => 
            row.map(slot => <MineSlot />))
    }

    return(<div className="mine-field-beginner">
         {renderMineSlots()}
        </div>)
}

export default MineFieldBeginner