export const resizeToContent = (element: HTMLElement, minHeight = 32) => {
  const borderHeight =
    parseInt(window.getComputedStyle(element).borderTopWidth) +
    parseInt(window.getComputedStyle(element).borderBottomWidth)

  element.style.minHeight = `${minHeight}px`
  element.style.height = `${element.scrollHeight + borderHeight}px`
}
