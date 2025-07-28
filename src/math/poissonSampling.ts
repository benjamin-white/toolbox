import PoissonDiskSampling from 'poisson-disk-sampling'

type ScatterPointsOptions = {
  shape: [number, number]
  minDistance?: number
  maxDistance?: number
  tries?: number
  distanceFunction?: (coords: [number, number], exponent: number) => number
}

const scatterPoints = (settings?: ScatterPointsOptions, RNG = Math.random) => {
  const defaults = {
    shape: [500, 500],
    minDistance: 5,
    maxDistance: 200,
    tries: 20,
  }

  return new PoissonDiskSampling({ ...defaults, ...settings }, RNG).fill()
}

export default scatterPoints
