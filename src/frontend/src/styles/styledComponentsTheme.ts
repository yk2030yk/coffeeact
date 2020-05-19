/**
 * styled-components内で共通で利用したい値を定義する
 * example:
 *   const styledP = styled.p`
 *     font-size: ({ theme } => theme.fontSize.sm);
 *   `
 */

const fontSize = {
  sm: '16px',
}

const media = {
  sm: '@media (max-width: 768px)',
}

const theme = {
  fontSize,
  media,
} as const

export default theme
