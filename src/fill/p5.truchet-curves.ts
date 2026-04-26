import p5 from 'p5'

const range = (count: number) => Array.from({ length: count }).map((_, i) => i)

export const patternTruchetCurves = (
  p5: p5,
  bbox: { xMin: number; xMax: number; yMin: number; yMax: number },
  scale: number,
) => {
  p5.angleMode(p5.DEGREES)
  p5.drawingContext.lineCap = 'butt'

  const [sizeX, sizeY] = [bbox.xMax - bbox.xMin, bbox.yMax - bbox.yMin]
  const cellsX = Math.ceil(sizeX / scale)
  const cellsY = Math.ceil(sizeY / scale)
  const STROKE_COLOR = '#353131'
  const FILL_COLOR = '#fff'
  const PATTERN_WIDTH = 10
  const FILL_WIDTH = 6

  const getTilePair = (
    tileX: number,
    tileY: number,
    index: number,
    radius: number,
  ) =>
    [
      [
        [
          tileX * scale + bbox.xMin,
          tileY * scale + bbox.yMin,
          radius * 0.5,
          0,
          Math.PI * 0.5,
        ],
        [
          tileX * scale + scale + bbox.xMin,
          tileY * scale + scale + bbox.yMin,
          radius * 0.5,
          Math.PI,
          Math.PI * 1.5,
        ],
      ],
      [
        [
          tileX * scale + scale + bbox.xMin,
          tileY * scale + bbox.yMin,
          radius * 0.5,
          Math.PI * 0.5,
          Math.PI,
        ],
        [
          tileX * scale + bbox.xMin,
          tileY * scale + scale + bbox.yMin,
          radius * 0.5,
          Math.PI * 1.5,
          Math.PI * 2,
        ],
      ],
    ][index]

  for (const i of range(cellsX)) {
    for (const j of range(cellsY)) {
      const pair = getTilePair(i, j, Math.random() > 0.5 ? 0 : 1, scale)

      for (const corner of pair) {
        // outline
        p5.drawingContext.strokeStyle = STROKE_COLOR
        p5.drawingContext.lineWidth = PATTERN_WIDTH
        p5.drawingContext.beginPath()
        p5.drawingContext.arc(...corner)
        p5.drawingContext.stroke()

        // infill
        p5.drawingContext.strokeStyle = FILL_COLOR
        p5.drawingContext.lineWidth = FILL_WIDTH
        p5.drawingContext.beginPath()
        p5.drawingContext.arc(...corner)
        p5.drawingContext.stroke()
      }
    }
  }
}
