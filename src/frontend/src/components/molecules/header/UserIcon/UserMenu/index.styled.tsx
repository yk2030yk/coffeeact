import { styled, theme, mixins, colorUtils } from '@/styles'

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export const Menu = styled.div`
  width: 250px;
  height: 200px;
  position: absolute;
  right: 10px;
  top: 55px;
  border: solid 1px ${theme.color.christmasSilver};
  background-color: ${theme.color.white};
  border-radius: 5px;
  padding: 5px 0;
`

export const MenuItem = styled.div`
  width: 100%;
  padding: 5px 20px;
  ${mixins.text}
  ${mixins.pointer}
  display: flex;
  flex-direction: row;
  align-items: center;
  & > p {
    margin-left: 10px;
  }
  &:hover {
    background-color: ${theme.color.whiteSmoke};
  }
`
