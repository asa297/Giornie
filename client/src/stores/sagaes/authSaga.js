import { firebase } from '@myfirebase'
import { put, takeLeading } from 'redux-saga/effects'
import { actionTypes } from '@stores/types'
import { setIsAuthLoading, setAuthError, changeLocation } from '@stores/actions'

function* loginTask({ payload }) {
  try {
    yield put(setIsAuthLoading({ isLoading: true }))
    const { email, password } = payload
    yield firebase.auth().signInWithEmailAndPassword(email, password)

    yield put(changeLocation({ path: '/about' }))
  } catch (e) {
    yield put(setAuthError({ isError: true, message: 'Auth Error' }))
  } finally {
    yield put(setIsAuthLoading({ isLoading: false }))
  }
}

export default [takeLeading(actionTypes.AUTH_MODULE.LOGIN, loginTask)]
