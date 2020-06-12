import React from 'react'
import { Switch } from 'react-router-dom'

import AppRoute from './AppRoute'
import AuthRoute from './AuthRoute'

import AdminHomePage from '../pages/admin/AdminHomePage'
import AdminLoginPage from '../pages/admin/AdminLoginPage'
import AdminArticlesPage from '../pages/admin/AdminArticlesPage'
import AdminArticleCreatePage from '../pages/admin/AdminArticleCreatePage'
import AdminArticleEditorPage from '../pages/admin/AdminArticleEditorPage'

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
      <AuthRoute
        exact
        path="/admin/article/:articleId/edit"
        component={ArticleEditorPage}
      />
      <AuthRoute exact path="/admin/home" component={AdminHomePage} />
      <AuthRoute exact path="/admin/articles" component={AdminArticlesPage} />
      <AuthRoute
        exact
        path="/admin/article/create"
        component={AdminArticleCreatePage}
      />
      <AuthRoute
        exact
        path="/admin/article/:articleId"
        component={AdminArticleEditorPage}
      />

      <AppRoute exact path="/articles" component={ArticlesPage} />
      <AppRoute exact path="/article/:articleId" component={ArticlePage} />
      <AppRoute exact path="/profile" component={ProfilePage} />
      <AppRoute exact path="/admin/login" component={AdminLoginPage} />
      <AppRoute exact path="/about" component={AboutPage} />
      <AppRoute exact path="/error" component={FatalErrorPage} />
      <AppRoute exact path="/" component={HomePage} />
      <AppRoute exact path="*" component={NotFoundPage} />
    </Switch>
  )
}

export default Routes
