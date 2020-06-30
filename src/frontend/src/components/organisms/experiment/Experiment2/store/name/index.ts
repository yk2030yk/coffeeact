import { createSlice } from '@reduxjs/toolkit'
export { default as selectors } from './selectors'

const initialState = {
  name: '',
}

const slice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setName: (state, action) => {
      return { ...state, name: action.payload }
    },
  },
})

export const { reducer, actions } = slice
