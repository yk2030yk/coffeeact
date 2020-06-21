import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import WithScrollToTop from './WithScrollToTop'
import WithErrorBoundary from './WithErrorBoundary'
import WithGlobalStyle from './WithGlobalStyle'
import WithEmotionTheme from './WithEmotionTheme'
import WithIntl from './WithIntl'
// import WithRecoil from './WithRecoil'
import WithSentry from './WithSentry'
import Routes from '../routes'
import { AppContextProvider } from '@/contexts/AppContext'
import { PageContextProvider } from '@/contexts/PageContext'

const App: React.FC = () => (
  <WithSentry>
    <WithIntl>
      <WithEmotionTheme>
        <WithGlobalStyle>
          <BrowserRouter>
            <WithErrorBoundary>
              <WithScrollToTop>
                <AppContextProvider>
                  <PageContextProvider>
                    <Routes />
                  </PageContextProvider>
                </AppContextProvider>
              </WithScrollToTop>
            </WithErrorBoundary>
          </BrowserRouter>
        </WithGlobalStyle>
      </WithEmotionTheme>
    </WithIntl>
  </WithSentry>
)

export default App
