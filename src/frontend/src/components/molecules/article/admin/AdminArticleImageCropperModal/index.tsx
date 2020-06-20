import React from 'react'

import { Modal } from '@/components/atoms'
import AdminArticleImageCropper from '../AdminArticleImageCropper'
import { ModalProps } from '@/hooks/common/useModal'

type Props = {
  handleFinish: (blob: Blob) => void
  modal: ModalProps
}

const Page: React.FC<Props> = ({ handleFinish, modal }) => (
  <Modal modal={modal}>
    <AdminArticleImageCropper
      handleFinish={(blob: Blob | undefined) => {
        if (blob) handleFinish(blob)
        modal.close()
      }}
    />
  </Modal>
)

export default Page
