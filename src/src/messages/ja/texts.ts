const APP_NAME = 'CoffeeAct'

export const texts = {
  app: {
    name: APP_NAME,
    page: {
      home: 'Home',
      about: 'About',
      help: 'Help',
      profile: 'Profile',
      admin: {
        login: 'Login',
      },
    },
  },
  home: {
    newArrivalArticle: {
      title: '最近の記事',
    },
    ranking: {
      title: '人気の記事',
    },
    searchArticleByTag: {
      title: 'タグから探す',
    },
  },
  about: {
    title: `${APP_NAME}とは`,
  },

  articles: {
    title: '珈琲記事一覧',
  },

  profile: {
    title: 'Profile',
    writerName: 'TAKAHIRO NEGISHI',
    contents: {
      born: { label: '出身', text: '東京都目黒区' },
      lives: { label: '住まい', text: '埼玉県さいたま市' },
      hobby: { label: '趣味', text: '珈琲・映画鑑賞' },
      contact: { label: 'メール', text: 'tkhrngs0001556@gmail.com' },
      github: { label: 'GitHub', text: 'https://github.com/yk2030yk' },
      twitter: { label: 'Twitter', text: 'https://twitter.com/------' },
      qiita: { label: 'Qiita', text: 'https://qiita.com/yk_ngsyk' },
    },
  },
}
