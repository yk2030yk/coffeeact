const ADMIN_PREFIX = '/admin'
const STANDARD_PREFIX = ''

const addAdminPrefix = (path: string) => `${ADMIN_PREFIX}/${path}`
const addStandardPrefix = (path: string) => `${STANDARD_PREFIX}/${path}`

const ADMIN_HOME = addAdminPrefix('home')
const ADMIN_ARTICLES = addAdminPrefix('articles')
const ADMIN_CREATE_ARTICLE = addAdminPrefix('article/create')
const ADMIN_EDIT_ARTICLE = addAdminPrefix('article/:articleId')
const ADMIN_MANAGE_TAG = addAdminPrefix('tag')

const STANDARD_ARTICLES = addStandardPrefix('articles')
const STANDARD_SEARCH_ARTICLES = addStandardPrefix('articles/search')
const STANDARD_ARTICLE = addStandardPrefix('article/:articleId')
const STANDARD_PROFILE = addStandardPrefix('profile')
const STANDARD_LOGIN = addStandardPrefix('login')
const STANDARD_ABOUT = addStandardPrefix('about')
const STANDARD_ERROR = addStandardPrefix('error')
const STANDARD_HOME = addStandardPrefix('')

const ALL = '*'

export const paths = {
  ADMIN_HOME,
  ADMIN_ARTICLES,
  ADMIN_CREATE_ARTICLE,
  ADMIN_EDIT_ARTICLE,
  ADMIN_MANAGE_TAG,
  STANDARD_ARTICLES,
  STANDARD_SEARCH_ARTICLES,
  STANDARD_ARTICLE,
  STANDARD_PROFILE,
  STANDARD_LOGIN,
  STANDARD_ABOUT,
  STANDARD_ERROR,
  STANDARD_HOME,
  ALL,
}
