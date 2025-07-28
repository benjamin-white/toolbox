import p5, { Vector } from 'p5'
import { toCSSRGB } from '../color/to-css-rgb'
import { PaletteEntry } from '../color/palettes'
import { getWeightedColor } from '../color/get-weighted-color'
import { getFurthestVert } from '../geometry/p5.get-furthest-vert'

export const setLinearGradient = (
  p5: p5,
  vertices: Vector[],
  palette: PaletteEntry[],
) => {
  const start = p5.random(vertices)
  const end = getFurthestVert(p5, start, vertices)

  const gradient = p5.drawingContext.createLinearGradient(
    start.x,
    start.y,
    end.x,
    end.y,
  )
  gradient.addColorStop(0, toCSSRGB(getWeightedColor(palette)))
  gradient.addColorStop(1, toCSSRGB(getWeightedColor(palette)))

  p5.drawingContext.fillStyle = gradient
}
