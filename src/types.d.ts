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
    setLevel: (value: Level) => void,
    numberOfRemainingMines: number,
    setNumberOfRemainingMines: (value: number) => void,
    bestTimes: BestTimes,
    setBestTimes: (value: BestTimes) => void,
    gameTime: number,
    setGameTime: (value: number) => void,
    resetGame: boolean,
    setResetGame: (value: boolean) => void
  }