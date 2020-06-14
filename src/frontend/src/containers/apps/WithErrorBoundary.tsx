import React from 'react'
import { Redirect } from 'react-router-dom'

import { loggerService } from '@/service/LoggerService'
import { sentryService } from '@/service/SentryService'

type Props = {}
type State = {
  error: Error | null
  errorInfo: object | null
}

/**
 * コンポーネント内で起きたエラーをキャッチする
 */
class WithErrorBoundary extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error: Error | null, errorInfo: object): void {
    this.setState({
      error,
      errorInfo,
    })
    loggerService.error('Application Error', { errorInfo, error })
    sentryService.send(error, errorInfo)
  }

  render(): React.ReactNode {
    if (this.state.errorInfo) {
      return <Redirect to="/500" />
    }

    return this.props.children
  }
}

export default WithErrorBoundary
