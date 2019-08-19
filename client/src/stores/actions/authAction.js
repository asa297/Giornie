import { actionTypes } from '@stores/types'

export const loginAction = ({ email, password }) => ({
  type: actionTypes.AUTH_MODULE.LOGIN,
  payload: { email, password },
})

export const setIsAuthLoading = ({ isLoading }) => ({
  type: actionTypes.AUTH_MODULE.IS_LOADING,
  payload: { isLoading },
})

export const setAuthError = ({ isError, message }) => ({
  type: actionTypes.AUTH_MODULE.ERROR_AUTH,
  payload: { isError, message },
})
