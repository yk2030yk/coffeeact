import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import 'moment/locale/ja'

import {
  AppRoute,
  WithScrollToTop,
  WithErrorBoundary,
  WithGlobalStyle,
  WithMuiTheme,
  WithStyledComponentsTheme,
} from '@/containers/apps'

import CompanyOnlineInterviewEntrancePage from '@/containers/pages/company/OnlineInterviewEntrancePage'
import CompanyOnlineInterviewPage from '@/containers/pages/company/OnlineInterviewPage'
import OnlineInterviewCompletePage from '@/containers/pages/company/OnlineInterviewCompletePage'
import StudentOnlineInterviewPage from '@/containers/pages/student/OnlineInterviewPage'
import StudentOnlineInterviewEntrancePage from '@/containers/pages/student/OnlineInterviewEntrancePage'
import StudentOnlineInterviewCompletePage from '@/containers/pages/student/OnlineInterviewCompletePage'

const App: React.FC = () => {
  return (
    <WithMuiTheme>
      <WithStyledComponentsTheme>
        <WithGlobalStyle>
          <Router>
            <WithErrorBoundary>
              <WithScrollToTop>
                <Switch>
                  <AppRoute
                    exact
                    path="/company/:roomName/entrance"
                    component={CompanyOnlineInterviewEntrancePage}
                  />
                  <AppRoute
                    exact
                    path="/company/:roomName/interview"
                    component={CompanyOnlineInterviewPage}
                  />
                  <AppRoute
                    exact
                    path="/company/:roomName/complete"
                    component={OnlineInterviewCompletePage}
                  />
                  <AppRoute
                    exact
                    path="/student/:roomName/entrance"
                    component={StudentOnlineInterviewEntrancePage}
                  />
                  <AppRoute
                    exact
                    path="/student/:roomName/interview"
                    component={StudentOnlineInterviewPage}
                  />
                  <AppRoute
                    exact
                    path="/student/:roomName/complete"
                    component={StudentOnlineInterviewCompletePage}
                  />
                </Switch>
              </WithScrollToTop>
            </WithErrorBoundary>
          </Router>
        </WithGlobalStyle>
      </WithStyledComponentsTheme>
    </WithMuiTheme>
  )
}

export default App
