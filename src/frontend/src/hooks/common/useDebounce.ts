// @ts-ignore
import debounce from 'lodash.debounce'

export const useDebounce = (func: any, wait = 500) => {
  return debounce(func, wait)
}
