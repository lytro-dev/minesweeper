class CellObj {
    constructor(xCoordinate, yCoordinate) {
        this.xCoordinate = xCoordinate
        this.yCoordinate = yCoordinate
        this.mined = false
        this.clicked = false
        this.flagged = false
        this.checkedForNeighboringMines = false
        this.numberOfNeighboringMines = 0   
    }
}

export default CellObj
