import { all } from 'redux-saga/effects'

import authSagaModule from './authSaga'

export function* rootSaga() {
  yield all([...authSagaModule])
}
