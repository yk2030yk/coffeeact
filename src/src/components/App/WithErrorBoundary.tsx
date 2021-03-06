import React, { ErrorInfo } from 'react'
import { Redirect } from 'react-router-dom'

import { loggerService } from '@/service/LoggerService'
import { sentryService } from '@/service/SentryService'
import { FatalErrorPageRoute } from '@/components/App/Routes/pageRoutes'

type Props = {}
type State = {
  error: Error | null
  errorInfo: ErrorInfo | null
}

/**
 * コンポーネント内で起きたエラーをキャッチする
 */
export class WithErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error: Error | null, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
    })
    loggerService.error('Application Error', { errorInfo, error })
    sentryService.send(error, errorInfo)
  }

  render(): React.ReactNode {
    if (this.state.errorInfo) {
      return <Redirect to={FatalErrorPageRoute.formatPath()} />
    }

    return this.props.children
  }
}
