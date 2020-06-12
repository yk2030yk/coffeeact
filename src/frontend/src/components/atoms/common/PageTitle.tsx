import { styled, mixins, theme } from '@/styles'

export default styled.p`
  ${mixins.heading}
  padding: 10px 10px;
  font-size: 26px;
  border-left: solid 3px ${theme.color.evilSunzScarlet};
`
