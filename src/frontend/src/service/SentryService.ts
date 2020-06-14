import * as Sentry from '@sentry/browser'

export class SentryService {
  public send(error: any, errorInfo: any) {
    Sentry.configureScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key])
      })
    })
    Sentry.captureException(error)
  }
}

export const sentryService = new SentryService()
