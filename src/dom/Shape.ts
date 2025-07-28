type MakeCircle = Vec2 & { r: number; arcStart?: number; arcEnd?: number }
type MakeTriangle = Vec2 & { r: number; rotation?: number }
type MakeRectangle = Vec2 & { w: number; h: number; rotation?: number }

class Shape {
  public applyFill: boolean = false
  public applyStroke: boolean = true
  private TAU = Math.PI * 2

  constructor(private ctx: CanvasRenderingContext2D) {}

  private fillAndStroke() {
    this.applyFill && this.ctx.fill()
    this.applyStroke && this.ctx.stroke()
  }

  makeCircle({ x, y, r, arcStart = 0, arcEnd = this.TAU }: MakeCircle) {
    this.ctx.save()
    this.ctx.translate(x, y)
    this.ctx.beginPath()
    this.ctx.arc(0, 0, r, arcStart, arcEnd)
    this.ctx.restore()
    this.fillAndStroke()
  }

  makeTriangle({ x, y, r, rotation }: MakeTriangle) {
    const angle = this.TAU / 3

    this.ctx.save()
    this.ctx.translate(x, y)
    this.ctx.rotate(-(Math.PI / 2))
    rotation && this.ctx.rotate(rotation)
    this.ctx.beginPath()
    this.ctx.moveTo(r * Math.cos(angle), r * Math.sin(angle))
    this.ctx.lineTo(r * Math.cos(angle * 2), r * Math.sin(angle * 2))
    this.ctx.lineTo(r * Math.cos(angle * 3), r * Math.sin(angle * 3))
    this.ctx.closePath()
    this.ctx.restore()

    this.fillAndStroke()
  }

  makeRectangle({ x, y, w, h, rotation }: MakeRectangle) {
    this.ctx.save()
    this.ctx.translate(x, y)
    rotation && this.ctx.rotate(rotation)
    this.ctx.rect(w * 0.5 * -1, h * 0.5 * -1, w, h)
    this.ctx.restore()

    this.fillAndStroke()
  }
}

export default Shape
