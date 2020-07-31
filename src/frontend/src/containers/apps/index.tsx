import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import WithScrollToTop from './WithScrollToTop'
import WithErrorBoundary from './WithErrorBoundary'
import WithGlobalStyle from './WithGlobalStyle'
import WithEmotionTheme from './WithEmotionTheme'
import WithIntl from './WithIntl'
import WithSentry from './WithSentry'
import WithRecoil from './WithRecoil'
import Routes from '../routes'
import { AppContextProvider } from '@/contexts/AppContext'

const App: React.FC = () => (
  <WithRecoil>
    <WithSentry>
      <WithIntl>
        <WithEmotionTheme>
          <WithGlobalStyle>
            <BrowserRouter>
              <WithErrorBoundary>
                <WithScrollToTop>
                  <AppContextProvider>
                    <Routes />
                  </AppContextProvider>
                </WithScrollToTop>
              </WithErrorBoundary>
            </BrowserRouter>
          </WithGlobalStyle>
        </WithEmotionTheme>
      </WithIntl>
    </WithSentry>
  </WithRecoil>
)

export default App
