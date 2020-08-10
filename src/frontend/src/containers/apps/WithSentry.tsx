import React from 'react'
import * as Sentry from '@sentry/browser'
import sentryConfig from '@/sentryConfig'

Sentry.init(sentryConfig)

/**
 * sentryのセットアップを行う
 */
export const WithSentry: React.FC = ({ children }) => {
  return <>{children}</>
}
