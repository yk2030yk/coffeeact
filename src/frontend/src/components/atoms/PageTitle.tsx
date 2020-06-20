import { styled, mixins, theme } from '@/styles'

export default styled.p`
  ${mixins.heading}
  padding: 10px 10px;
  font-size: ${theme.fontSize.pageTitle};
  border-left: solid 3px ${theme.color.evilSunzScarlet};
`
