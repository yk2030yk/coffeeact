import { styled, mixins, theme } from '@/styles'
import { FaUserCircle } from '@/components/atoms/icons'

export const Form = styled.form`
  width: 500px;
  border: solid 1px #c5c5c5;
  border-radius: 5px;
  background-color: ${theme.color.white};
  display: flex;
  flex-direction: column;
  padding: 60px;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  margin-top: 10px;
`

export const Icon = styled(FaUserCircle)`
  color: ${theme.color.yankeesBlue};
`

export const Title = styled.div`
  ${mixins.heading}
  text-align: center;
  padding: 0;
`
