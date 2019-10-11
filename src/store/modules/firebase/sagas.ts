import { all, call, cancelled, put, takeLatest } from 'redux-saga/effects'

import FirebaseService from '../../../services/firebase'

import { FirebaseActions } from '.'

function* initialize() {
  try {
    const user = yield call(FirebaseService.initialize)

    yield put(FirebaseActions.firebaseInitSuccess({ user }))
  } catch (err) {
    console.error(err)
    yield put(FirebaseActions.firebaseInitFailure(err))
  } finally {
    if (yield cancelled()) yield put(FirebaseActions.firebaseInitCancel())
  }
}

function* login(action: ReturnType<typeof FirebaseActions.firebaseLoginRequest>) {
  try {
    const {
      payload: { email, password },
    } = action
    const user = yield call(FirebaseService.login, email, password)

    yield put(FirebaseActions.firebaseLoginSuccess({ user }))
  } catch (err) {
    console.error(err)
    yield put(FirebaseActions.firebaseLoginFailure(err))
  } finally {
    if (yield cancelled()) yield put(FirebaseActions.firebaseLoginCancel())
  }
}

function* logout() {
  try {
    yield call(FirebaseService.logout)

    yield put(FirebaseActions.firebaseLogoutSuccess())
  } catch (err) {
    console.error(err)
    yield put(FirebaseActions.firebaseLogoutFailure(err))
  } finally {
    if (yield cancelled()) yield put(FirebaseActions.firebaseLogoutCancel())
  }
}

export function* FirebaseSagas() {
  yield all([
    takeLatest(FirebaseActions.firebaseInitRequest, initialize),
    takeLatest(FirebaseActions.firebaseLoginRequest, login),
    takeLatest(FirebaseActions.firebaseLogoutRequest, logout),
  ])
}
