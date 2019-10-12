import { createReducer } from 'redux-starter-kit'

import { User } from '../../../types'

import { FirebaseActions } from '.'

export enum FirebaseErrors {
  LOGIN = 'firebaseErrors/LOGIN',
}

export interface IFirebaseState {
  user: User | null | undefined
  initialized: boolean
  errors: { [key: string]: Error | null }
}

const INITIAL_STATE: IFirebaseState = {
  user: undefined,
  initialized: false,
  errors: {
    [FirebaseErrors.LOGIN]: null,
  },
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
  [FirebaseActions.firebaseLoginRequest.type]: (state: IFirebaseState) => {
    state.errors[FirebaseErrors.LOGIN] = null
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

    state.errors[FirebaseErrors.LOGIN] = error
  },
  [FirebaseActions.firebaseLogoutSuccess.type]: (state: IFirebaseState) => {
    state.user = null
  },
})
