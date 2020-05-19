import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import WithScrollToTop from './WithScrollToTop'
import WithErrorBoundary from './WithErrorBoundary'
import WithGlobalStyle from './WithGlobalStyle'
import WithMuiTheme from './WithMuiTheme'
import WithStyledComponentsTheme from './WithStyledComponentsTheme'
import Routes from '../routes'

const App: React.FC = () => (
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
)

export default App
