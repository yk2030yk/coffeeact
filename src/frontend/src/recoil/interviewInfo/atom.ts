import { atom } from 'recoil'

export const _token = atom({
  key: 'tokenState',
  default: undefined,
})

export const _interviewInfo = atom({
  key: 'interviewInfoState',
  default: undefined,
})
