import React from 'react'
import { RiCloseLine } from 'react-icons/ri'
import * as S from './index.styled'
import { ModalProps } from '@/hooks/common/useModal'

type Props = {
  modal: ModalProps
}

const Modal: React.FC<Props> = ({ children, modal }) => {
  return (
    <>
      {modal.isOpen && (
        <S.ModalBackground onClick={() => modal.close()}>
          <S.ModalWrapper>
            <S.ModalContent onClick={(e) => e.stopPropagation()}>
              <S.CloseButtonBox onClick={() => modal.close()}>
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
