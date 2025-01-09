/* eslint-disable @typescript-eslint/no-magic-numbers */

const addHexTransparency = (hex: string, transparency: number = 50): string => {
  if (transparency < 0 || transparency > 100) return hex

  const transparencyHex = Math.floor(2.55 * transparency)

  return hex + transparencyHex.toString(16)
}

export {
  addHexTransparency
}
