export const range = (start: number, end: number, step: number = 1) => {
  const range: number[] = []

  for (let i = start; i <= end; i += step) {
    range.push(i)
  }

  return range
}
