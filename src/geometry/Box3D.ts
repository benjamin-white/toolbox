import { range } from 'radash'
import { TAU } from '../constants'

type Vec3 = {
  x: number
  y: number
  z: number
}

type Vec2 = Omit<Vec3, 'z'>

const Vec3 = (x: number, y: number, z: number) => ({
  x,
  y,
  z,
})

class Box3D {
  origin: Vec3
  vertices: Vec3[]
  edges: [number, number][]

  constructor({ x, y, z = 0 }: Vec2 & { z?: number }, size: number) {
    this.origin = { x, y, z }
    this.vertices = [
      Vec3(x - size, y - size, z - size),
      Vec3(x + size, y - size, z - size),
      Vec3(x + size, y + size, z - size),
      Vec3(x - size, y + size, z - size),
      Vec3(x - size, y - size, z + size),
      Vec3(x + size, y - size, z + size),
      Vec3(x + size, y + size, z + size),
      Vec3(x - size, y + size, z + size),
    ]
    this.edges = [
      // back face
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      // front face
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
      // connecting sides
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ]
  }

  setRotation(euler: Vec3) {
    const angleZ = TAU * euler.z
    for (const vertex of this.vertices) {
      const dx = vertex.x - this.origin.x
      const dy = vertex.y - this.origin.y
      const x = dx * Math.cos(angleZ) - dy * Math.sin(angleZ)
      const y = dx * Math.sin(angleZ) + dy * Math.cos(angleZ)
      vertex.x = x + this.origin.x
      vertex.y = y + this.origin.y
    }

    const angleY = TAU * euler.y
    for (const vertex of this.vertices) {
      const dx = vertex.x - this.origin.x
      const dz = vertex.z - this.origin.z
      const x = dz * Math.sin(angleY) + dx * Math.cos(angleY)
      const z = dz * Math.cos(angleY) - dx * Math.sin(angleY)
      vertex.x = x + this.origin.x
      vertex.z = z + this.origin.z
    }

    const angleX = TAU * euler.x
    for (const vertex of this.vertices) {
      const dy = vertex.y - this.origin.y
      const dz = vertex.z - this.origin.z
      const y = dy * Math.cos(angleX) - dz * Math.sin(angleX)
      const z = dy * Math.sin(angleX) + dz * Math.cos(angleX)
      vertex.y = y + this.origin.y
      vertex.z = z + this.origin.z
    }
  }

  getPerimiterVerts() {
    const unorderedVerts = this.vertices
      .map((vert) => ({
        dist: Math.sqrt(
          (this.origin.x - vert.x) ** 2 + (this.origin.y - vert.y) ** 2,
        ),
        x: vert.x,
        y: vert.y,
        isConnected: false,
      }))
      .sort((a, b) => b.dist - a.dist)
      .slice(0, 6)
      .map((vert, index) => ({ ...vert, id: index }))

    const orderedVerts = [unorderedVerts[0]]
    unorderedVerts[0].isConnected = true

    for (const i of range(0, 4)) {
      const currentVert = orderedVerts[i]
      const toCheck = unorderedVerts.filter((vert) => !vert.isConnected)

      const closest = toCheck
        .map((vert) => ({
          ...vert,
          dist: Math.sqrt(
            (currentVert.x - vert.x) ** 2 + (currentVert.y - vert.y) ** 2,
          ),
        }))
        .sort((a, b) => a.dist - b.dist)[0]

      orderedVerts.push(closest)
      unorderedVerts[closest.id].isConnected = true
    }

    return orderedVerts
  }

  getEdges() {
    const edges: { start: Vec2; end: Vec2 }[] = []

    for (const edge of this.edges) {
      edges.push({
        start: { x: this.vertices[edge[0]].x, y: this.vertices[edge[0]].y },
        end: { x: this.vertices[edge[1]].x, y: this.vertices[edge[1]].y },
      })
    }

    return edges
  }
}

export default Box3D
