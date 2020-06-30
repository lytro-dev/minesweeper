import React, {useState, useEffect} from 'react'

import {Cell} from './'
import {CellObj, LevelsEnum} from '../utils'

const MineField = () => {
    const [firstCellClicked, setFirstCellClicked] = useState(false)
    const [mineFieldArray, setMineFieldArray] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [gameWon, setGameWon] = useState(false)
    
    useEffect(()=>{
        buildMineFieldArray()
    }, [])

    const distributeMines = () => {
        let numberOfMinesToDistribute = LevelsEnum.beginner.numberOfMines
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
        for(let y = 0; y <LevelsEnum.beginner.width; y++) {
            let rowArray = []
            for(let x = 0; x < LevelsEnum.beginner.height; x++){    
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
                    if (cell.mined && !cell.flagged) cell.clicked = true
                }
        ))
        setMineFieldArray(mineFieldArrayCopy)
    }

    const revealNeighboringEmptyCells = (x, y) => {
        let mineFieldArrayCopy = [...mineFieldArray]
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

    const checkIfWon = () => {
        //Check if there are any cells that haven't been clicked and don't contain a mine
        if (mineFieldArray.filter(row => row.filter(cell => !cell.clicked && !cell.mined).length).length === 0) {
            setGameWon(true)
        }
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
                                    revealNeighboringEmptyCells={revealNeighboringEmptyCells}
                                    gameOver={gameOver}
                                    setGameOver={setGameOver}
                                    checkIfWon={checkIfWon}/>))
    }

    return(<div className="mine-field-beginner">
         {renderMineField()}
        </div>)
}

export default MineField