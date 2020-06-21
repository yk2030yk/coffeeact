/**
 * font-family定義
 */
export const fontFamily = {
  default:
    '"Noto Sans JP", "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", Robot, Arial, "メイリオ", Meiryo,Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;',
}

/**
 * font-size定義
 */
export const fontSize = {
  smallText: '11px',
  text: '13px',
  default: '13px',
  heading2: '16px',
  heading: '18px',
  pageTitle: '20px',
  big: '42px',
}

export const fontWeight = {
  normal: '400',
  bold: '600',
}

/**
 * media定義
 */
export const media = {
  sm: '@media (max-width: 768px)',
}

/**
 * space
 */
export const space = {
  basic: '30px',
  atom: '20px',
}

/**
 * z-index
 */
export const zindex = {
  header: 300,
  modal: 500,
  loading: 700,
  snackbar: 900,
}

/**
 * 高さ定義
 */
export const height = {
  header: '70px',
  homeHeader: '500px',
}

/**
 * 色定義
 * 色の名前は以下のコマンドで生成
 * 近似している色名も出力しているので被る場合は自分でつけてください。
 * $ yarn namingColor -- "#ffffff"
 */
export const color = {
  red: '#f00',
  vermilionBird: '#f44336',
  embarrassment: '#ff7878',
  white: '#fff',
  whiteSmoke: '#f5f5f5',
  crystalBell: '#efefef',
  superSilver: '#eee',
  coldMorning: '#e5e5e5',
  greyArea: '#ddd',
  weatheredStone: '#c4c4c4',
  dhusarGrey: '#ababab',
  indianInk: '#3a3e49',
  hardCoal: '#656565',
  davysGrey: '#555555',
  carbon: '#333',
  argent: '#888888',
  dodgerBlue: '#3387ff',
  blueRibbon: '#0069ff',
  dodgerBlueA01: 'rgba(51, 135, 255, 0.1)',
  blueRibbonA01: 'rgba(0, 105, 255, 0.1)',
  darkestDungeon: '#610015',
  charcoalSmudge: '#5f5f5f',
  blackCat: '#2f2f2f',
  yankeesBlue: '#162e42',
  reactBlue: '#54d3fa',
  jamaicanJade: '#69ceb7',
  flintRock: '#969494',
  oldGreyMare: '#b5b4ad',
  evilSunzScarlet: '#c11b1b',
  exodusFruit: '#635ada',
  christmasSilver: '#e0e0e0',
  bgWhite: '#fafafa',
  coronation: '#ececec',
  plaster: '#eaeaea',
  aquarellePurple: '#d8dff7',
  radiantYellow: '#ff9f24',
  leadbelcher: '#cacaca',
  spanishGrey: '#969696',
  fusionRed: '#ff6363',
}
