import { createSelector } from 'reselect'
import { AUTH_MODULE } from '@stores/types'

export const rootAuthSelector = state => state[AUTH_MODULE]
export const isLoadingSelector = createSelector(
  rootAuthSelector,
  authState => authState.isLoading,
)
