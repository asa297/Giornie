import { actionTypes } from '@stores/types'

const initState = {
  isLoading: false,
  authMessage: '',
  isAuthError: false,
}

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.AUTH_MODULE.IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.payload,
      })
    case actionTypes.AUTH_MODULE.ERROR_AUTH:
      return Object.assign({}, state, {
        isAuthError: action.payload.isError,
        authMessage: action.payload.message,
      })
    default:
      return state
  }
}
