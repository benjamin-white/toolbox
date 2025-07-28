import { clamp } from './clamp'

export const fit = (
  current: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) => {
  const mapped =
    ((current - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  return clamp(mapped, outMin, outMax)
}
