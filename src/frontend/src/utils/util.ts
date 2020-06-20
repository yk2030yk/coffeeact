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
