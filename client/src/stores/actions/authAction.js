import { actionTypes } from '@stores/types'

export const loginAction = ({ email, password }) => ({
  type: actionTypes.AUTH_MODULE.LOGIN,
  payload: { email, password },
})
