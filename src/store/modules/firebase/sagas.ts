import { all, call, cancelled, put, takeLatest } from 'redux-saga/effects'

import FirebaseService from '../../../services/firebase'

import { FirebaseActions } from '.'

function* initialize() {
  try {
    yield call(FirebaseService.initialize)

    yield put(FirebaseActions.firebaseInitSuccess())
  } catch (err) {
    console.error(err)
    yield put(FirebaseActions.firebaseInitFailure(err))
  } finally {
    if (yield cancelled()) yield put(FirebaseActions.firebaseInitCancel())
  }
}

export function* FirebaseSagas() {
  yield all([takeLatest(FirebaseActions.firebaseInitRequest, initialize)])
}
