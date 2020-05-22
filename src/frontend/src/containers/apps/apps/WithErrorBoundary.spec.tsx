import React from 'react'
import * as utils from '@/tests/utils/testUtils'

import WithErrorBoundary from './WithErrorBoundary'

const TestComponent: React.FC<{ throwError?: boolean }> = ({
  throwError = false,
}) => {
  if (throwError) throw new Error('Component Error')
  return <div>TestComponent</div>
}

describe('<WithErrorBoundary/>', () => {
  it('エラーのないコンポーネントの描写', () => {
    utils.snapshot(
      <WithErrorBoundary>
        <TestComponent />
      </WithErrorBoundary>
    )
  })

  it('エラーのあるコンポーネントの描写', () => {
    utils.snapshot(
      <WithErrorBoundary>
        <TestComponent throwError={true} />
      </WithErrorBoundary>
    )
  })
})
