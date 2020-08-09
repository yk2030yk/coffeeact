import { CoffeeActApplicationError } from './CoffeeActApplicationError'

export class NotMediaPermissionError extends CoffeeActApplicationError {
  constructor() {
    super(`メディア権限を取得できませんでした。`)
  }
}
