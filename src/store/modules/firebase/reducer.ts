import { createReducer } from 'redux-starter-kit'

import { User } from '../../../types'

import { FirebaseActions } from '.'

export interface IFirebaseState {
  user: User | null | undefined
  initialized: boolean
}

const INITIAL_STATE: IFirebaseState = {
  user: undefined,
  initialized: false,
}

export const firebaseReducer = createReducer(INITIAL_STATE, {
  [FirebaseActions.firebaseInitSuccess.type]: (
    state: IFirebaseState,
    action: ReturnType<typeof FirebaseActions.firebaseInitSuccess>,
  ) => {
    const {
      payload: { user },
    } = action

    state.user = user
    state.initialized = true
  },
  [FirebaseActions.firebaseLoginSuccess.type]: (
    state: IFirebaseState,
    action: ReturnType<typeof FirebaseActions.firebaseLoginSuccess>,
  ) => {
    const {
      payload: { user },
    } = action

    state.user = user
  },
  [FirebaseActions.firebaseLoginFailure.type]: (
    state: IFirebaseState,
    action: ReturnType<typeof FirebaseActions.firebaseLoginFailure>,
  ) => {
    const { payload: error } = action

    console.log(error)
  },
  [FirebaseActions.firebaseLogoutSuccess.type]: (state: IFirebaseState) => {
    state.user = null
  },
})
