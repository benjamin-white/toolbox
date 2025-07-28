import { PaletteEntry } from './palettes'
import { getWeightedRandom } from '../math/get-weighted-random'

export const getWeightedColor = (palette: PaletteEntry[]) =>
  getWeightedRandom(
    palette.map(({ rgb }) => rgb),
    palette.map(({ weight }) => weight),
  )
