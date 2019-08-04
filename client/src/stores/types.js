export const AUTH_MODULE = 'AUTH_MODULE'

const actionTypes = {
  [AUTH_MODULE]: {
    LOGIN: `${AUTH_MODULE}/LOGIN`,
    IS_LOADING: `${AUTH_MODULE}/IS_LOADING`,
    IS_ERROR_AUTHENTICATED: `${AUTH_MODULE}/IS_ERROR_AUTHENTICATED`,
  },
}

export { actionTypes }
