import React from 'react'
import { Switch } from 'react-router-dom'

import AppRoute from './AppRoute'
import AuthRoute from './AuthRoute'

import AdminHomePage from '@/containers/pages/admin/AdminHomePage'
import AdminLoginPage from '@/containers/pages/admin/AdminLoginPage'

import AdminArticlesPage from '@/containers/pages/article/admin/AdminArticlesPage'
import AdminArticleCreatePage from '@/containers/pages/article/admin/AdminArticleCreatePage'
import AdminArticleEditorPage from '@/containers/pages/article/admin/AdminArticleEditorPage'

import ArticlePage from '@/containers/pages/article/user/ArticlePage'
import ArticlesPage from '@/containers/pages/article/user/ArticlesListPage'

import HomePage from '@/containers/pages/home/HomePage'
import ProfilePage from '@/containers/pages/profile/ProfilePage'
import AboutPage from '@/containers/pages/about/AboutPage'
import FatalErrorPage from '@/containers/pages/error/FatalErrorPage'
import NotFoundPage from '@/containers/pages/error/NotFoundPage'

import ExperimentPage from '@/containers/pages/experiment/ExperimentPage'

const Routes: React.FC = () => {
  return (
    <Switch>
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

      <AppRoute exact path="/experiment" component={ExperimentPage} />

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
