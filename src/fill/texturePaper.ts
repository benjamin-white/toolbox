import { fit } from '../math/fit'

const texturePaper = (
  ctx: CanvasRenderingContext2D,
  sizeX: number,
  sizeY: number,
  fillSize: number,
) => {
  for (let i = 0; i < sizeX; i += fillSize) {
    for (let j = 0; j < sizeY; j += fillSize) {
      ctx.fillStyle = `hsl(0 0% ${fit(Math.random(), 0, 1, 83, 98)}% / 25%)`
      ctx.fillRect(i, j, fillSize, fillSize)
      ctx.fillStyle = '#fff'
    }
  }
}

export default texturePaper
