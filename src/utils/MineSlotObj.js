class MineSlotObj {
    constructor(xCoordinate, yCoordinate) {
        this.xCoordinate = xCoordinate
        this.yCoordinate = yCoordinate
        this.mined = false
        this.clicked = false
        this.disabled = false
        this.numberOfNeighboringMines = 0   
    }
}


export default MineSlotObj
