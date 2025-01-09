/* eslint-disable @typescript-eslint/no-magic-numbers */

const generateHex = (): string => {
  const randomColor = Math.floor(Math.random() * 256 * 256 * 256).toString(16)

  return `#${randomColor.padStart(6, '0')}`
}

export {
  generateHex
}
