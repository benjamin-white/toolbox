const upScale = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  [sizeX, sizeY]: [number, number],
  multiplier = 2
) => {
  canvas.width = sizeX * multiplier
  canvas.height = sizeY * multiplier
  context.scale(multiplier, multiplier)
  canvas.style.width = `${sizeX}px`
  canvas.style.height = `${sizeY}px`
}

export default upScale