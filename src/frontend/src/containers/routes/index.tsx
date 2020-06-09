import React from 'react'
import { Switch } from 'react-router-dom'

import AppRoute from './AppRoute'
import ProfilePage from '../pages/ProfilePage'
import ArticlePage from '../pages/ArticlePage'
import ArticlesPage from '../pages/ArticlesPage'
import ArticleEditorPage from '../pages/ArticleEditorPage'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import FatalErrorPage from '../pages/FatalErrorPage'
import NotFoundPage from '../pages/NotFoundPage'

const Routes: React.FC = () => {
  return (
    <Switch>
      <AppRoute exact path="/articles" component={ArticlesPage} />
      <AppRoute exact path="/article/:articleId" component={ArticlePage} />
      <AppRoute
        exact
        path="/article/:articleId/edit"
        component={ArticleEditorPage}
      />
      <AppRoute exact path="/profile" component={ProfilePage} />
      <AppRoute exact path="/about" component={AboutPage} />
      <AppRoute exact path="/error" component={FatalErrorPage} />
      <AppRoute exact path="/" component={HomePage} />
      <AppRoute exact path="*" component={NotFoundPage} />
    </Switch>
  )
}

export default Routes
