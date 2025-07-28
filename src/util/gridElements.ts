import { range } from 'radash'

type Vec2 = {
  x: number
  y: number
}

type GridElementsArgs = {
  ctx: CanvasRenderingContext2D
  canvasDimensions: Vec2
  cellCounts: Vec2
  gutters: Vec2
  offsets: Vec2
  drawCallback: (
    {
      ctx,
      posX,
      posY,
      cellSizeX,
      cellSizeY,
    }: {
      ctx: CanvasRenderingContext2D
      posX: number
      posY: number
      cellSizeX: number
      cellSizeY: number
    },
    ...rest: unknown[]
  ) => void
  debug?: boolean
}

const gridElements = (
  {
    ctx,
    canvasDimensions,
    cellCounts,
    gutters,
    offsets,
    drawCallback,
    debug,
  }: GridElementsArgs,
  ...rest: unknown[]
) => {
  const cellSizeX =
    (canvasDimensions.x - offsets.x * 2 - gutters.x * (cellCounts.x - 1)) /
    cellCounts.x
  const cellSizeY =
    (canvasDimensions.y - offsets.y * 2 - gutters.y * (cellCounts.y - 1)) /
    cellCounts.y

  if (debug) {
    ctx.fillStyle = 'aqua'
    ctx.fillRect(0, 0, canvasDimensions.x, offsets.x)
    ctx.fillRect(0, 0, offsets.y, canvasDimensions.y)
    ctx.fillRect(
      canvasDimensions.x - offsets.x,
      0,
      offsets.x,
      canvasDimensions.y,
    )
    ctx.fillRect(
      0,
      canvasDimensions.y - offsets.y,
      canvasDimensions.x,
      offsets.x,
    )
  }
  for (let i of range(0, cellCounts.x - 1)) {
    for (let j of range(0, cellCounts.y - 1)) {
      const x = i * cellSizeX + i * gutters.x + offsets.x
      const y = j * cellSizeY + j * gutters.y + offsets.y
      if (debug) {
        ctx.fillStyle = 'chocolate'
        ctx.fillRect(x, y, cellSizeX, cellSizeY)
      }

      drawCallback({ ctx, posX: x, posY: y, cellSizeX, cellSizeY }, ...rest)
    }
  }
}

export default gridElements
