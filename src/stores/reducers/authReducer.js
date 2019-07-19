import { actionTypes } from '@stores/types'

const initState = {
  isLoading: false,
}

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.AUTH_MODULE.IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.payload,
      })
    default:
      return state
  }
}
