import React from 'react'

import { RiCloseLine } from '@/components/atoms/icons'
import * as S from './styled'
import { ModalProps } from '@/hooks/useModal'

type Props = {
  modal: ModalProps
}

const Modal: React.FC<Props> = ({ children, modal }) => {
  return (
    <>
      {modal.isOpen && (
        <S.ModalBackground
          onClick={() => modal.close()}
          data-testid="background"
        >
          <S.ModalWrapper>
            <S.ModalContent
              onClick={(e) => e.stopPropagation()}
              data-testid="content"
            >
              <S.CloseButtonBox
                onClick={() => modal.close()}
                data-testid="closeButton"
              >
                <RiCloseLine size={50} />
              </S.CloseButtonBox>
              {children}
            </S.ModalContent>
          </S.ModalWrapper>
        </S.ModalBackground>
      )}
    </>
  )
}

export default Modal
