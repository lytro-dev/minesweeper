import React, {useState, useEffect} from 'react'

import {Cell} from './'
import {CellObj} from '../utils'

const MineField = () => {
    const [firstCellClicked, setFirstCellClicked] = useState(false)
    const [mineFieldArray, setMineFieldArray] = useState([])
    const gameVariants = Object.freeze({
        beginner: {
            width: 9,
            height: 9,
            numberOfMines: 10
        }
    })
    
    useEffect(()=>{
        buildMineFieldArray()
    }, [])

    const distributeMines = () => {
        let numberOfMinesToDistribute = gameVariants.beginner.numberOfMines
        const mineFieldArrayCopy = [...mineFieldArray]
        while(numberOfMinesToDistribute>0) {
            let randomRow = mineFieldArrayCopy[Math.floor(Math.random()*mineFieldArrayCopy.length)]
            let randomCell = randomRow[Math.floor(Math.random()*randomRow.length)]
            if(!randomCell.clicked && !randomCell.mined) {
                randomCell.mined = true
                numberOfMinesToDistribute--
            }         
        }
        mineFieldArrayCopy.forEach(row => {
            row.forEach(cell => {
                if(!cell.mined) {
                    let count = 0
                    if(mineFieldArrayCopy?.[cell.yCoordinate]?.[cell.xCoordinate-1]?.mined) {count++}
                    if(mineFieldArrayCopy?.[cell.yCoordinate]?.[cell.xCoordinate+1]?.mined) {count++}
                    if(mineFieldArrayCopy?.[cell.yCoordinate-1]?.[cell.xCoordinate-1]?.mined) {count++}
                    if(mineFieldArrayCopy?.[cell.yCoordinate-1]?.[cell.xCoordinate]?.mined) {count++}
                    if(mineFieldArrayCopy?.[cell.yCoordinate-1]?.[cell.xCoordinate+1]?.mined) {count++}
                    if(mineFieldArrayCopy?.[cell.yCoordinate+1]?.[cell.xCoordinate-1]?.mined) {count++}
                    if(mineFieldArrayCopy?.[cell.yCoordinate+1]?.[cell.xCoordinate]?.mined) {count++}
                    if(mineFieldArrayCopy?.[cell.yCoordinate+1]?.[cell.xCoordinate+1]?.mined) {count++}
                    cell.numberOfNeighboringMines = count
                }
            })
        })
        setMineFieldArray(mineFieldArrayCopy)
        setFirstCellClicked(true)
    }

    const buildMineFieldArray = () => {
        const mineFieldArray = []
        for(let y = 0; y <gameVariants.beginner.width; y++) {
            let rowArray = []
            for(let x = 0; x < gameVariants.beginner.height; x++){    
                rowArray.push(new CellObj(x, y))
                
            }
            mineFieldArray.push(rowArray)
        }
        setMineFieldArray(mineFieldArray)
    }

    const revealAllMines = () => {
        const mineFieldArrayCopy = [...mineFieldArray]
        mineFieldArrayCopy.forEach(
            row => row.forEach(
                cell => {
                    if (cell.mined) cell.clicked = true
                }
        ))
        setMineFieldArray(mineFieldArrayCopy)
    }

    const revealNeighboringEmptyCells = (x, y) => {
        let mineFieldArrayCopy = [...mineFieldArray]
        console.log(mineFieldArrayCopy)
        if(mineFieldArrayCopy?.[y]?.[x-1]) {mineFieldArrayCopy[y][x-1].clicked = true}
        if(mineFieldArrayCopy?.[y]?.[x+1]) {mineFieldArrayCopy[y][x+1].clicked = true}
        if(mineFieldArrayCopy?.[y-1]?.[x-1]) {mineFieldArrayCopy[y-1][x-1].clicked = true}
        if(mineFieldArrayCopy?.[y-1]?.[x]) {mineFieldArrayCopy[y-1][x].clicked = true}
        if(mineFieldArrayCopy?.[y-1]?.[x+1]) {mineFieldArrayCopy[y-1][x+1].clicked = true}
        if(mineFieldArrayCopy?.[y+1]?.[x-1]) {mineFieldArrayCopy[y+1][x-1].clicked = true}
        if(mineFieldArrayCopy?.[y+1]?.[x]) {mineFieldArrayCopy[y+1][x].clicked = true}
        if(mineFieldArrayCopy?.[y+1]?.[x+1]) {mineFieldArrayCopy[y+1][x+1].clicked = true}
        if(mineFieldArrayCopy?.[y]?.[x-1]?.numberOfNeighboringMines === 0 && !mineFieldArrayCopy?.[y]?.[x-1]?.checkedForNeighboringMines) {
            mineFieldArrayCopy[y][x-1].checkedForNeighboringMines = true
            revealNeighboringEmptyCells(x-1, y)
        }
        if(mineFieldArrayCopy?.[y]?.[x+1]?.numberOfNeighboringMines === 0 && !mineFieldArrayCopy?.[y]?.[x+1]?.checkedForNeighboringMines) {
            mineFieldArrayCopy[y][x+1].checkedForNeighboringMines = true
            revealNeighboringEmptyCells(x+1, y)
        }
        if(mineFieldArrayCopy?.[y-1]?.[x-1]?.numberOfNeighboringMines === 0 && !mineFieldArrayCopy?.[y-1]?.[x-1]?.checkedForNeighboringMines) {
            mineFieldArrayCopy[y-1][x-1].checkedForNeighboringMines = true
            revealNeighboringEmptyCells(x-1, y-1)
        }
        if(mineFieldArrayCopy?.[y-1]?.[x]?.numberOfNeighboringMines === 0 && !mineFieldArrayCopy?.[y-1]?.[x]?.checkedForNeighboringMines) {
            mineFieldArrayCopy[y-1][x].checkedForNeighboringMines = true
            revealNeighboringEmptyCells(x, y-1)
        }
        if(mineFieldArrayCopy?.[y-1]?.[x+1]?.numberOfNeighboringMines === 0 && !mineFieldArrayCopy?.[y-1]?.[x+1]?.checkedForNeighboringMines) {
            mineFieldArrayCopy[y-1][x+1].checkedForNeighboringMines = true
            revealNeighboringEmptyCells(x+1, y-1)
        }
        if(mineFieldArrayCopy?.[y+1]?.[x-1]?.numberOfNeighboringMines === 0 && !mineFieldArrayCopy?.[y+1]?.[x-1]?.checkedForNeighboringMines) {
            mineFieldArrayCopy[y+1][x-1].checkedForNeighboringMines = true
            revealNeighboringEmptyCells(x-1, y+1)
        }
        if(mineFieldArrayCopy?.[y+1]?.[x]?.numberOfNeighboringMines === 0 && !mineFieldArrayCopy?.[y+1]?.[x]?.checkedForNeighboringMines) {
            mineFieldArrayCopy[y+1][x].checkedForNeighboringMines = true
            revealNeighboringEmptyCells(x, y+1)
        }
        if(mineFieldArrayCopy?.[y+1]?.[x+1]?.numberOfNeighboringMines === 0 && !mineFieldArrayCopy?.[y+1]?.[x+1]?.checkedForNeighboringMines) {
            mineFieldArrayCopy[y+1][x+1].checkedForNeighboringMines = true
            revealNeighboringEmptyCells(x+1, y+1)
        }

        setMineFieldArray(mineFieldArrayCopy)
    }
    
    const renderMineField = () => {
        return mineFieldArray.map(row => 
            row.map(cell => <Cell   key={`${cell.xCoordinate}${cell.yCoordinate}`} 
                                        cellProps={cell} 
                                        mineFieldArray={mineFieldArray}
                                        firstCellClicked={firstCellClicked}
                                        setFirstCellClicked={setFirstCellClicked}
                                        distributeMines={distributeMines}
                                        revealAllMines={revealAllMines}
                                        revealNeighboringEmptyCells={revealNeighboringEmptyCells}/>))
    }

    return(<div className="mine-field-beginner">
         {renderMineField()}
        </div>)
}

export default MineField