type BestTimes = {
    BEGINNER: number,
    INTERMEDIATE: number,
    EXPERT: number
}

type Level = 'BEGINNER' | 'INTERMEDIATE' | 'EXPERT'

type Context = {
    gameOver: boolean,
    setGameOver: (value: boolean) => void,
    gameWon: boolean,
    setGameWon: (value: boolean) => void,
    gameStarted: boolean,
    setGameStarted: (value: boolean) => void,
    level: Level,
    setLevel: (value: LevelNames) => void,
    numberOfRemainingMines: number,
    setNumberOfRemainingMines: (value: number | ((prevState: number) => number)) => void,
    bestTimes: BestTimes,
    setBestTimes: (value: BestTimes) => void,
    gameTime: number,
    setGameTime: (value: number | ((prevState: number) => number)) => void,
    resetGame: boolean,
    setResetGame: (value: boolean) => void
  }

  type Cell = {
      xCoordinate: number,
      yCoordinate: number,
      mined: boolean,
      clicked: boolean,
      flagged: boolean,
      missFlagged: boolean,
      checkedForNeighboringMines: boolean,
      numberOfNeighboringMines: number
  }