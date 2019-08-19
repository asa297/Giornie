import { all } from 'redux-saga/effects'

import authSagaModule from './authSaga'
import commonSagaModule from './commonSaga'

export function* rootSaga() {
  yield all([...authSagaModule, ...commonSagaModule])
}
