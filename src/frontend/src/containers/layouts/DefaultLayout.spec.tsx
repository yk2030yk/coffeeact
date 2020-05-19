import React from 'react'
import * as utils from '@/tests/utils/testUtils'

import DefaultLayout from './DefaultLayout'

describe('<DefaultLayout/>', () => {
  it('SnapshotTest', () => {
    utils.snapshot(
      utils.withStore(
        <DefaultLayout>
          <div></div>
        </DefaultLayout>
      )
    )
  })
})
