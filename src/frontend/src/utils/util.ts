import cryptoRandomString from 'crypto-random-string'

/**
 * 値があるかチェックをする
 */
export const isDefine = (value: any): boolean => {
  return value !== undefined && value !== null
}

/**
 * 値があるかチェックをする
 */
export const isUndefined = (value: any): boolean => {
  return value === undefined
}

export const randomString = () => {
  return cryptoRandomString({ length: 10, type: 'url-safe' })
}

export const arrayChunk = <T extends any[]>(arr: T, size: number): T[] => {
  return arr.reduce(
    (newArr, _, i) => (i % size ? newArr : [...newArr, arr.slice(i, i + size)]),
    [] as T[]
  )
}

export const range = (start: number, end: number) => {
  const rangeArr = []
  for (let i = start; i <= end; i++) {
    rangeArr.push(i)
  }
  return rangeArr
}
