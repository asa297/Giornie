import { firebase } from '@myfirebase'
import { put, takeLeading } from 'redux-saga/effects'
import { actionTypes } from '@stores/types'
import { push } from 'react-router-redux'

function* loginTask({ payload }) {
  try {
    yield put({ type: actionTypes.AUTH_MODULE.IS_LOADING, payload: true })
    const { email, password } = payload
    yield firebase.auth().signInWithEmailAndPassword(email, password)

    yield put(push(`/about`))
  } catch (e) {
    yield put({ type: actionTypes.AUTH_MODULE.IS_ERROR_AUTHENTICATED, payload: true })
  } finally {
    yield put({ type: actionTypes.AUTH_MODULE.IS_LOADING, payload: false })
  }
}

export default [takeLeading(actionTypes.AUTH_MODULE.LOGIN, loginTask)]
