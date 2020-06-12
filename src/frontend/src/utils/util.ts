import cryptoRandomString from 'crypto-random-string'

/**
 * 値があるかチェックをする
 */
export const isDefine = (value: any): boolean => {
  return value !== undefined && value !== null
}

export const randomString = () => {
  return cryptoRandomString({ length: 10, type: 'url-safe' })
}
