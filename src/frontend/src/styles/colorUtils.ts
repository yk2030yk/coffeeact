import chroma from 'chroma-js'

export const darken = (color: string, value = 1) => {
  return chroma(color).darken(value).hex()
}

export const brighten = (color: string, value = 1) => {
  return chroma(color).brighten(value).hex()
}
