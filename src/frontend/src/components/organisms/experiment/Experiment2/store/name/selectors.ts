import { createSelector } from 'reselect'
import { State } from '..'

export const name = createSelector<State, string, string>(
  (state) => state.name.name,
  (name) => name
)

export default {
  name,
}
