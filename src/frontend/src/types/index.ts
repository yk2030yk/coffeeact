/**
 * objectのvalueのみを型にする
 */
export type ValueOf<T> = T[keyof T]
