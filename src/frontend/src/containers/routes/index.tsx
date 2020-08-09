import React from 'react'
import { Switch } from 'react-router-dom'

import { AppRoute } from './AppRoute'
import { AuthRoute } from './AuthRoute'
import { paths } from './paths'

import AdminHomePage from '@/containers/pages/admin/AdminHomePage'
import AdminLoginPage from '@/containers/pages/admin/AdminLoginPage'

import AdminArticlesPage from '@/containers/pages/article/AdminArticlesPage'
import AdminArticleCreatePage from '@/containers/pages/article/AdminArticleCreatePage'
import AdminArticleEditorPage from '@/containers/pages/article/AdminArticleEditorPage'

import AdminArticleTagEditorPage from '@/containers/pages/articleTag/AdminArticleTagEditorPage'

import ArticlePage from '@/containers/pages/article/ArticlePage'
import ArticlesPage from '@/containers/pages/article/ArticlesListPage'
import SearchResultArticlesListPage from '@/containers/pages/article/SearchResultArticlesListPage'

import HomePage from '@/containers/pages/home/HomePage'
import ProfilePage from '@/containers/pages/profile/ProfilePage'
import AboutPage from '@/containers/pages/about/AboutPage'
import FatalErrorPage from '@/containers/pages/error/FatalErrorPage'
import NotFoundPage from '@/containers/pages/error/NotFoundPage'

const Routes: React.FC = () => {
  return (
    <Switch>
      <AuthRoute exact path={paths.ADMIN_HOME} component={AdminHomePage} />
      <AuthRoute
        exact
        path={paths.ADMIN_ARTICLES}
        component={AdminArticlesPage}
      />
      <AuthRoute
        exact
        path={paths.ADMIN_CREATE_ARTICLE}
        component={AdminArticleCreatePage}
      />
      <AuthRoute
        exact
        path={paths.ADMIN_EDIT_ARTICLE}
        component={AdminArticleEditorPage}
      />
      <AuthRoute
        exact
        path={paths.ADMIN_MANAGE_TAG}
        component={AdminArticleTagEditorPage}
      />

      <AppRoute exact path={paths.STANDARD_ARTICLES} component={ArticlesPage} />
      <AppRoute
        exact
        path={paths.STANDARD_SEARCH_ARTICLES}
        component={SearchResultArticlesListPage}
      />
      <AppRoute exact path={paths.STANDARD_ARTICLE} component={ArticlePage} />
      <AppRoute exact path={paths.STANDARD_PROFILE} component={ProfilePage} />
      <AppRoute exact path={paths.STANDARD_LOGIN} component={AdminLoginPage} />
      <AppRoute exact path={paths.STANDARD_ABOUT} component={AboutPage} />
      <AppRoute exact path={paths.STANDARD_ERROR} component={FatalErrorPage} />
      <AppRoute exact path={paths.STANDARD_HOME} component={HomePage} />
      <AppRoute exact path={paths.ALL} component={NotFoundPage} />
    </Switch>
  )
}

export default Routes
