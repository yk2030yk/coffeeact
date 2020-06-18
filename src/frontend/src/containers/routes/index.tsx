import React from 'react'
import { Switch } from 'react-router-dom'

import AppRoute from './AppRoute'
import AuthRoute from './AuthRoute'

import AdminHomePage from '@/containers/pages/admin/AdminHomePage'
import AdminLoginPage from '@/containers/pages/admin/AdminLoginPage'

import AdminArticlesPage from '@/containers/pages/article/admin/AdminArticlesPage'
import AdminArticleCreatePage from '@/containers/pages/article/admin/AdminArticleCreatePage'
import AdminArticleEditorPage from '@/containers/pages/article/admin/AdminArticleEditorPage'

import AdminCoffeeArticlesPage from '@/containers/pages/coffeArticle/admin/AdminCoffeeArticlesPage'
import AdminCoffeeArticleCreatePage from '@/containers/pages/coffeArticle/admin/AdminCoffeeArticleCreatePage'
import AdminCoffeeArticleEditorPage from '@/containers/pages/coffeArticle/admin/AdminCoffeeArticleEditorPage'

import ArticlePage from '@/containers/pages/article/user/ArticlePage'
import ArticlesPage from '@/containers/pages/article/user/ArticlesListPage'
import CoffeeArticlePage from '@/containers/pages/coffeArticle/user/CoffeeArticlePage'
import CoffeeArticlesPage from '@/containers/pages/coffeArticle/user/CoffeeArticlesListPage'

import HomePage from '@/containers/pages/home/HomePage'
import ProfilePage from '@/containers/pages/profile/ProfilePage'
import AboutPage from '@/containers/pages/about/AboutPage'
import FatalErrorPage from '@/containers/pages/error/FatalErrorPage'
import NotFoundPage from '@/containers/pages/error/NotFoundPage'

const Routes: React.FC = () => {
  return (
    <Switch>
      <AuthRoute exact path="/admin/home" component={AdminHomePage} />

      {/* article */}
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

      {/* coffee article */}
      <AuthRoute
        exact
        path="/admin/coffee/articles"
        component={AdminCoffeeArticlesPage}
      />
      <AuthRoute
        exact
        path="/admin/coffee/article/create"
        component={AdminCoffeeArticleCreatePage}
      />
      <AuthRoute
        exact
        path="/admin/coffee/article/:articleId"
        component={AdminCoffeeArticleEditorPage}
      />

      {/* coffee article */}
      <AppRoute exact path="/articles" component={ArticlesPage} />
      <AppRoute exact path="/article/:articleId" component={ArticlePage} />

      {/* coffee article */}
      <AppRoute exact path="/coffee/articles" component={CoffeeArticlesPage} />
      <AppRoute
        exact
        path="/coffee/article/:articleId"
        component={CoffeeArticlePage}
      />

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
