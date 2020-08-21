/* eslint no-console: 0 */

type LogOption = Record<string, unknown>

/**
 * logを管理するサービス、log出力はこのサービスを経由する
 */
class LoggerService {
  private _logJson(message: string, option: LogOption = {}): string {
    return JSON.stringify({
      ...option,
      message,
    })
  }

  public info(message: string, option: LogOption = {}): void {
    console.info(this._logJson(message, option))
  }

  public debug(message: string, option: LogOption = {}): void {
    console.debug(this._logJson(message, option))
  }

  public warn(message: string, option: LogOption = {}): void {
    console.warn(this._logJson(message, option))
  }

  public error(message: string, option: LogOption = {}): void {
    console.error(this._logJson(message, option))
  }
}

export const loggerService = new LoggerService()
