import React from 'react'
import { RecoilRoot } from 'recoil'

const WithRecoil: React.FC = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>
}

export default WithRecoil
