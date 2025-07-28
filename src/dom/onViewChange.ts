import debounce from 'lodash/debounce'

export const onViewChange = (cb: <T>() => T) =>
  ['resize', 'orientationchange'].forEach((event) => {
    window.addEventListener(event, debounce(cb, 100, { trailing: true }))
  })
