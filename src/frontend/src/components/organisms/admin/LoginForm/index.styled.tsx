import { styled, mixins, theme } from '@/styles'
import { FaUserCircle } from 'react-icons/fa'

export const Form = styled.form`
  width: 600px;
  ${mixins.card}
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

export const FormItem = styled.div`
  margin-top: 10px;
`

export const FormLabel = styled.div`
  ${mixins.text}
`

export const Title = styled.div`
  ${mixins.heading}
  text-align: center;
  padding: 0;
`

export const InputText = styled.input`
  border: solid 1px #999;
  width: 100%;
  ${mixins.text}
  padding: 5px;
`

export const SubmitButton = styled.input`
  ${mixins.button()}
  width: 100%;
`
