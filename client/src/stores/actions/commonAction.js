import { actionTypes } from '@stores/types'

export const changeLocation = ({ path }) => ({
  type: actionTypes.COMMON_MODULE.CHANGE_LOCATION,
  payload: { path },
})

export const changeLocationError = ({ isError, message }) => ({
  type: actionTypes.COMMON_MODULE.ERROR_CHANGE_LOCATION,
  payload: { isError, message },
})
