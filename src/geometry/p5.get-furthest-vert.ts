import p5, { type Vector } from 'p5'

export const getFurthestVert = (p5: p5, vertex: Vector, vertices: Vector[]) =>
  [...vertices].sort(
    (a, b) =>
      p5.dist(vertex.x, vertex.y, b.x, b.y) -
      p5.dist(vertex.x, vertex.y, a.x, a.y),
  )[0]
