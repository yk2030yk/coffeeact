import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import WithStore from './WithStore'
import WithScrollToTop from './WithScrollToTop'
import WithErrorBoundary from './WithErrorBoundary'
import WithGlobalStyle from './WithGlobalStyle'
import WithMuiTheme from './WithMuiTheme'
import WithIntl from './WithIntl'
import WithStyledComponentsTheme from './WithStyledComponentsTheme'
import Routes from '../routes'

const App: React.FC = () => (
  <WithStore>
    <WithIntl>
      <WithMuiTheme>
        <WithStyledComponentsTheme>
          <WithGlobalStyle>
            <BrowserRouter>
              <WithErrorBoundary>
                <WithScrollToTop>
                  <Routes />
                </WithScrollToTop>
              </WithErrorBoundary>
            </BrowserRouter>
          </WithGlobalStyle>
        </WithStyledComponentsTheme>
      </WithMuiTheme>
    </WithIntl>
  </WithStore>
)

export default App
