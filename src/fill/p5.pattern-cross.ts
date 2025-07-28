import p5 from 'p5'
import { PaletteEntry } from '../color/palettes'
import { getWeightedColor } from '../color/get-weighted-color'
import { fit } from '../math/fit'

export const patternCross = (
  p5: p5,
  bbox: { xMin: number; xMax: number; yMin: number; yMax: number },
  palette: PaletteEntry[],
  scale: number,
  depth: [number, number],
  overrideCellSize?: number,
) => {
  const DETAIL_THRESHOLD = 20 * Math.min(3, scale)
  const cellSize =
    overrideCellSize ?? fit(depth[0], 0, depth[1], 12, 30) * Math.min(3, scale)
  const [sizeX, sizeY] = [bbox.xMax - bbox.xMin, bbox.yMax - bbox.yMin]
  const cellsX = Math.ceil(sizeX / cellSize)
  let cellsY = Math.ceil(sizeY / cellSize)
  cellsY = cellsY % 2 !== 0 ? cellsY + 1 : cellsY
  let alternate = 0
  const isAboveThreshold = cellSize >= DETAIL_THRESHOLD
  const scaleFactor = Math.min(2, scale - 0.5)

  if (!isAboveThreshold) {
    p5.strokeWeight(p5.random(1, 4) * scaleFactor)
    p5.stroke(getWeightedColor(palette))
  }

  for (let i = -1; i < cellsX; i++) {
    for (let j = -1; j < cellsY; j++) {
      alternate++

      if (alternate % 2 !== 0) {
        continue
      }

      const offset = p5.random(cellSize * 0.1, cellSize * 0.4)

      if (isAboveThreshold) {
        p5.strokeWeight(p5.random(1, 4) * scaleFactor)
        p5.stroke(getWeightedColor(palette))
      }

      p5.line(
        bbox.xMin + i * cellSize + offset,
        bbox.yMin + j * cellSize + offset,
        bbox.xMin + i * cellSize + cellSize - offset,
        bbox.yMin + j * cellSize + cellSize - offset,
      )

      if (isAboveThreshold) {
        p5.strokeWeight(p5.random(1, 4) * scaleFactor)
        p5.stroke(getWeightedColor(palette))
      }

      p5.line(
        bbox.xMin + (i + 1) * cellSize - offset,
        bbox.yMin + j * cellSize + offset,
        bbox.xMin + i * cellSize + offset,
        bbox.yMin + (j + 1) * cellSize - offset,
      )
    }
  }
}
