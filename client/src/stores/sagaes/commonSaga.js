import { put, takeLeading } from 'redux-saga/effects'
import { actionTypes } from '@stores/types'
import { changeLocationError } from '@stores/actions'

import { push } from 'react-router-redux'

function* changeLocationTask({ payload }) {
  try {
    const { path } = payload
    yield put(push(path))
  } catch (e) {
    yield put(changeLocationError(true, 'change location is error'))
  }
}

export default [takeLeading(actionTypes.COMMON_MODULE.CHANGE_LOCATION, changeLocationTask)]
