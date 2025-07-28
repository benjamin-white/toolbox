import { vecAdjustMagnitude } from './vecAdjustMagnitude'

export class Vector {
  private x: number
  private y: number
  private origin = { x: 0, y: 0 }

  constructor({ x, y }: Vec2) {
    this.x = x
    this.y = y
  }

  getDistance(to: Vec2) {
    const dx = this.x - to.x
    const dy = this.y - to.y
    return Math.sqrt(dx * dx + dy * dy)
  }

  setOrigin(vec2d: Vec2) {
    this.origin = vec2d
  }

  set({ x, y }: Vec2) {
    this.x = x
    this.y = y
  }

  get() {
    return { x: this.x, y: this.y }
  }

  scale(scaleBy: number) {
    return vecAdjustMagnitude(this.get(), scaleBy)
  }

  toNormal() {
    // TODO: implement
  }

  // dot
  // partial derivative
  // tangent
}
