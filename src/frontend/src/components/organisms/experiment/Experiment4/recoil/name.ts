import { atom, selector } from 'recoil'

export const nameState = atom<string>({
  key: 'nameState',
  default: '',
})

export const nameCountState = selector({
  key: 'nameCountState',
  get: ({ get }) => {
    const text = get(nameState)
    return text.length
  },
})
