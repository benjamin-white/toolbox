export const getRandom = (isFixed?: boolean) => {
  if (isFixed) {
    return (() => {
      let iteration = 0
      let slightyRandom = [0.2, 0.5, 0.8, 0.1, 0.3, 0.7, 0.9, 0.6, 0.4]
      return () => slightyRandom[iteration++ % 9]
    })()
  }
  return Math.random
}
