import React from 'react'
import SnackbarMessageList from '@/components/organisms/common/SnackbarMessageList'
const Template: React.FC = ({ children }) => (
  <>
    <SnackbarMessageList />
    {children}
  </>
)

export default Template
