import React from 'react'
import { Switch } from 'react-router-dom'

import {
  AdminArticleCreatePageRoute,
  AdminArticleEditorPageRoute,
  AdminArticlesPageRoute,
  AdminArticleTagEditorPageRoute,
  AdminHomePageRoute,
  ArticleListPageRoute,
  ArticlePageRoute,
  SearchResultArticlesListPageRoute,
  AboutPageRoute,
  ProfilePageRoute,
  LoginPageRoute,
  FatalErrorPageRoute,
  NotFoundPageRoute,
  HomePageRoute,
} from './pageRoutes'

const Routes: React.FC = () => {
  return (
    <Switch>
      <AdminArticleCreatePageRoute />
      <AdminArticleEditorPageRoute />
      <AdminArticlesPageRoute />
      <AdminArticleTagEditorPageRoute />
      <AdminHomePageRoute />

      <ArticleListPageRoute />
      <ArticlePageRoute />
      <SearchResultArticlesListPageRoute />

      <AboutPageRoute />
      <ProfilePageRoute />
      <LoginPageRoute />
      <FatalErrorPageRoute />
      <HomePageRoute />
      <NotFoundPageRoute />
    </Switch>
  )
}

export default Routes
