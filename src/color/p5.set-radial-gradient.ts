import p5, { Vector } from 'p5'
import { PaletteEntry } from '../color/palettes'
import { getWeightedColor } from '../color/get-weighted-color'
import { getFurthestVert } from '../geometry/p5.get-furthest-vert'

export const setRadialGradient = (
  p5: p5,
  vertices: Vector[],
  palette: PaletteEntry[],
) => {
  const center = p5.random(vertices)
  const outer = getFurthestVert(p5, center, vertices)
  const gradient = p5.drawingContext.createRadialGradient(
    center.x,
    center.y,
    0,
    center.x,
    center.y,
    p5.dist(center.x, center.y, outer.x, outer.y) + 100,
  )
  const color = getWeightedColor(palette)
  gradient.addColorStop(0, `rgba(${color.join(' ')} / 1)`)
  gradient.addColorStop(1, `rgba(${color.join(' ')} / 0)`)

  p5.drawingContext.fillStyle = gradient
}
