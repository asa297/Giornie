import { actionTypes } from '@stores/types'

const initState = {
  changeLocationMessage: '',
  isChangeLocationError: false,
}

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.COMMON_MODULE.ERROR_CHANGE_LOCATION:
      return Object.assign({}, state, {
        changeLocationMessage: action.payload.message,
        isChangeLocationError: action.payload.isError,
      })
    default:
      return state
  }
}
