import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import WithScrollToTop from './WithScrollToTop'
import WithErrorBoundary from './WithErrorBoundary'
import WithGlobalStyle from './WithGlobalStyle'
import WithEmotionTheme from './WithEmotionTheme'
import WithIntl from './WithIntl'
import Routes from '../routes'
import { AppContextProvider } from '@/contexts/AppContext'

const App: React.FC = () => (
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
)

export default App
