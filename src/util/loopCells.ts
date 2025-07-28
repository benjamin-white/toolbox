import { range } from 'radash'

export interface LoopCells {
  (
    ctx: CanvasRenderingContext2D,
    cellsX: number,
    cellsY: number,
    cellSize: number,
    cb: CellSymbol,
    ...args: any[]
  ): void
}

export const loopCells: LoopCells = (
  ctx,
  cellsX,
  cellsY,
  cellSize,
  cb,
  ...args
) => {
  for (const i of range(-1, cellsX)) {
    for (const j of range(-1, cellsY)) {
      cb({ ctx, cells: [cellSize * j, cellSize * i], cellSize, ...args })
    }
  }
}
