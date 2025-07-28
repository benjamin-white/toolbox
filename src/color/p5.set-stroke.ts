import chroma from 'chroma-js'
import p5, { Color, Vector } from 'p5'
import { toCSSRGB } from '../color/to-css-rgb'
import { PaletteEntry } from '../color/palettes'
import { getWeightedColor } from '../color/get-weighted-color'
import { getFurthestVert } from '../geometry/p5.get-furthest-vert'

export const setStroke = (
  p5: p5,
  palette: PaletteEntry[],
  vertices: Vector[],
  gradientWeight: number,
  dropFill: Color,
  scale = 1,
) => {
  p5.strokeWeight(p5.random(1, 5) * scale)

  if (Math.random() > 0.75) {
    p5.stroke(dropFill)
    return
  }

  if (Math.random() < gradientWeight) {
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

    p5.drawingContext.strokeStyle = gradient
    return
  }

  const color = chroma.mix(getWeightedColor(palette), getWeightedColor(palette))
  p5.stroke(p5.color([...color.rgb(), p5.random(150, 255)]))
}
