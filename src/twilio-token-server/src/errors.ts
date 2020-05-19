export class EnvException extends Error {
  constructor(valueName: string) {
    super(`.envファイルに${valueName}の値がありません。`)
  }
}
