export const displacementFromImage = (
  imageSrc: string,
  width: number,
  height: number,
): Promise<number[] | Error> => {
  const handlePromise = (resolve: Function, reject: Function) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    const image = new Image()
    canvas.width = width
    canvas.height = height

    image.onload = () => {
      ctx.drawImage(image, 0, 0, width, height)
      const imageData = ctx.getImageData(0, 0, width, height)
      const pixels: number[] = []
      for (let i = 0; i < imageData.data.length; i += 4) {
        pixels.push(imageData.data[i])
      }
      resolve(pixels)
    }

    image.onerror = (err) => {
      reject(err)
    }

    image.src = imageSrc
  }

  return new Promise(handlePromise)
}
