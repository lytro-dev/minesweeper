export class LevelsEnum {
    static readonly BEGINNER = new LevelsEnum(9, 9, 10)
    static readonly INTERMEDIATE = new LevelsEnum(13, 16, 40)
    static readonly EXPERT = new LevelsEnum(16, 30, 99)

    private constructor(readonly width: number, readonly height: number, readonly numberOfMines: number) {
        this.width = width
        this.height = height
        this.numberOfMines = numberOfMines
    }
}

export enum LevelNames {
    BEGINNER = 'BEGINNER',
    INTERMEDIATE = 'INTERMEDIATE',
    EXPERT = 'EXPERT'
}