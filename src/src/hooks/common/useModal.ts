import { useState, useCallback } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const open = useCallback(() => setIsOpen(true), [setIsOpen])
  const close = useCallback(() => setIsOpen(false), [setIsOpen])
  return { isOpen, open, close }
}

export type ModalProps = ReturnType<typeof useModal>
