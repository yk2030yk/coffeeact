/**
 * Application Error
 */
export class AppError extends Error {}

/**
 * Graphql Error
 */
export class UseContextError extends AppError {
  constructor(ContextName: string) {
    super(`use${ContextName}は${ContextName}Provider内で呼び出してください。`)
  }
}

/**
 * Redux Error
 */
export class NotMatchActionTypeError extends AppError {
  constructor(actionType: string) {
    super(`指定されたAction Typeは存在しません。: ${actionType}`)
  }
}

export class NotMediaPermissionError extends AppError {
  constructor() {
    super(`メディア権限を取得できませんでした。`)
  }
}

export class EnvNotFoundException extends AppError {
  constructor(keyName: string) {
    super(`.envファイルに${keyName}の値がありません。`)
  }
}
