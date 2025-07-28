export const normalRange = (steps: number = 10) => {
  const samples = [0]

  for (let i = 1; i <= steps; i++) {
    samples.push(i / steps)
  }

  return samples
}
