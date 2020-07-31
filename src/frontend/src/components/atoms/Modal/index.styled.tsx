import { styled, theme, mixins, colorUtils } from '@/styles'

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colorUtils.alpha(theme.color.carbon)};
  z-index: ${theme.zindex.modal};
`

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  width: 90%;
  height: 90%;
  background-color: ${theme.color.white};
  border-radius: 5px;
  padding: ${theme.space.basic};
  position: relative;
`

export const CloseButtonBox = styled.div`
  width: 50px;
  height: 50px;
  right: 0;
  top: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mixins.pointer}
`
