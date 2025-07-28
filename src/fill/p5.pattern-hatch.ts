import p5 from 'p5'

export const patternHatch = (
  p5: p5,
  bbox: { xMin: number; xMax: number; yMin: number; yMax: number },
  scale: number,
) => {
  const strokeWidth = p5.random(5, 20) * (Math.min(2, scale) - 0.5)
  p5.strokeWeight(strokeWidth)

  const direction = (
    ['horizontal', 'vertical', 'diagonalLeft', 'diagonalRight'] as const
  ).slice(2)[Math.floor(Math.random() * 4)]

  switch (direction) {
    case 'horizontal': {
      let y = bbox.yMin
      while (y < bbox.yMax) {
        p5.line(bbox.xMin, y, bbox.xMax, y)
        y += strokeWidth * 2
      }
      break
    }
    case 'vertical': {
      let x = bbox.xMin
      while (x < bbox.xMax) {
        p5.line(x, bbox.yMin, x, bbox.yMax)
        x += strokeWidth * 2
      }
      break
    }
    case 'diagonalLeft': {
      let x = bbox.xMin
      const width = bbox.xMax - bbox.xMin
      const height = bbox.yMax - bbox.yMin
      const longestSide = width > height ? width : height

      while (x < bbox.xMax + longestSide) {
        p5.line(x, bbox.yMin, x - height, bbox.yMax)
        x += strokeWidth * 2
      }
      break
    }
    case 'diagonalRight': {
      const width = bbox.xMax - bbox.xMin
      const height = bbox.yMax - bbox.yMin
      const longestSide = width > height ? width : height
      let x = bbox.xMin - longestSide

      while (x < bbox.xMax) {
        p5.line(x, bbox.yMin, x + height, bbox.yMax)
        x += strokeWidth * 2
      }
    }
  }
}
