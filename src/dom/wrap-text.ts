function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {

  const words = text.split(' ')
  const lines = []
  let line = ''

  for (let i = 0; i < words.length; i++) {
    if (ctx.measureText(`${line} ${words[i]}`).width < maxWidth) {
      line += `${words[i]} `
      continue
    }
    lines.push(line)
    line = words[i]
  }

  lines.push(line)

  return lines

}

export default wrapText