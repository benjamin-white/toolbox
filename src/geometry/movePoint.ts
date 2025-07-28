const movePoint = (p1: Vec2, p2: Vec2, dist: number) => ({
  x: p1.x + (p2.x - p1.x) * dist,
  y: p1.y + (p2.y - p1.y) * dist,
})

export { movePoint }
