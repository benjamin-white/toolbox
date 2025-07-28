export type PaletteColor = [number, number, number]
export type PaletteEntry = { rgb: PaletteColor; weight: number }

export const palette: Record<string, PaletteEntry[]> = {
  woodland: [
    {
      rgb: [125, 126, 124],
      weight: 1,
    },
    {
      rgb: [234, 231, 220],
      weight: 1,
    },
    {
      rgb: [199, 180, 143],
      weight: 1,
    },
    {
      rgb: [60, 65, 93],
      weight: 1,
    },
    {
      rgb: [184, 91, 76],
      weight: 0.4,
    },
    {
      rgb: [94, 94, 94],
      weight: 1,
    },
    {
      rgb: [200, 200, 200],
      weight: 1,
    },
    {
      rgb: [216, 216, 216],
      weight: 1,
    },
  ],
  victoria: [
    {
      rgb: [243, 228, 211],
      weight: 1,
    },
    {
      rgb: [138, 133, 133],
      weight: 1,
    },
    {
      rgb: [121, 204, 215],
      weight: 1,
    },
    {
      rgb: [228, 155, 155],
      weight: 1,
    },
    {
      rgb: [207, 201, 201],
      weight: 1,
    },
    {
      rgb: [94, 94, 94],
      weight: 1,
    },
    {
      rgb: [200, 200, 200],
      weight: 1,
    },
    {
      rgb: [216, 216, 216],
      weight: 1,
    },
  ],
}
