import p5 from 'p5'
import { PaletteEntry } from '../color/palettes'
import { getWeightedColor } from '../color/get-weighted-color'
import { fit } from '../math/fit'

export const patternDotGrid = (
  p5: p5,
  bbox: { xMin: number; xMax: number; yMin: number; yMax: number },
  palette: PaletteEntry[],
  scale: number,
  depth: [number, number],
) => {
  const cellSize = fit(depth[0], 0, depth[1], 10, 55) * Math.min(2, scale)

  const [sizeX, sizeY] = [bbox.xMax - bbox.xMin, bbox.yMax - bbox.yMin]
  const cellsX = Math.ceil(sizeX / cellSize)
  let cellsY = Math.ceil(sizeY / cellSize)
  cellsY = cellsY % 2 !== 0 ? cellsY + 1 : cellsY
  let alternate = 0

  for (let i = 0; i < cellsX; i++) {
    alternate++

    for (let j = 0; j < cellsY; j++) {
      if (alternate % 2 !== 0) {
        alternate++
        continue
      }

      const margin = Math.floor(Math.random() * 10) * scale
      const radius = (cellSize - margin) * 0.5
      const cellCenter = {
        x: bbox.xMin + i * cellSize + cellSize * 0.5,
        y: bbox.yMin + j * cellSize + cellSize * 0.5,
      }

      p5.fill(getWeightedColor(palette))
      p5.strokeWeight(p5.random(1, 4))
      p5.stroke(getWeightedColor(palette))
      p5.circle(cellCenter.x, cellCenter.y, radius)

      alternate++
    }
  }

  return cellSize
}
