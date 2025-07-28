// @ts-nocheck
// TODO: use generics to fix the return type
const randomiseObject = (obj: {}): any => {
  const randomised = {}
  const keys = Object.keys(obj)
  const keysLookup = Object.keys(obj)

  while (keys.length) {
    const randomKey = keys[Math.floor(Math.random() * keys.length)]
    const randomValue = obj[randomKey]

    randomised[keysLookup[keysLookup.length - keys.length]] = randomValue

    keys.splice(keys.indexOf(randomKey), 1)
  }

  return randomised
}

export default randomiseObject
