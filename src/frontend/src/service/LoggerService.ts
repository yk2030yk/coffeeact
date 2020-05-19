/* eslint no-console: 0 */

/**
 * logを管理するサービス、log出力はこのサービスを経由する
 */
class LoggerService {
  private _logJson(message: string, option: {} = {}): string {
    return JSON.stringify({
      message,
      ...option,
    })
  }

  public info(message: string, option: {} = {}): void {
    console.info(this._logJson(message, option))
  }

  public debug(message: string, option: {} = {}): void {
    // FIXME: DEV環境のみ出力するようにする
    console.debug(this._logJson(message, option))
  }

  public warn(message: string, option: {} = {}): void {
    console.warn(this._logJson(message, option))
  }

  public error(message: string, option: {} = {}): void {
    // FIXME: エラーを検知できるようにする(ex: slackに通知するなど)
    console.error(this._logJson(message, option))
  }
}

export const loggerService = new LoggerService()
