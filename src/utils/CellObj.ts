class CellObj {
    xCoordinate: number
    yCoordinate: number
    mined: boolean
    clicked: boolean
    flagged: boolean
    missFlagged: boolean
    checkedForNeighboringMines: boolean
    numberOfNeighboringMines: number
    constructor(xCoordinate: number, yCoordinate: number) {
        this.xCoordinate = xCoordinate
        this.yCoordinate = yCoordinate
        this.mined = false
        this.clicked = false
        this.flagged = false
        this.missFlagged = false
        this.checkedForNeighboringMines = false
        this.numberOfNeighboringMines = 0   
    }
}

export default CellObj
