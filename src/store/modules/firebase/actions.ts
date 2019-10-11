import { createAction } from 'redux-starter-kit'

import { User } from '../../../types'

export const firebaseInitRequest = createAction<undefined>('firebase/INIT_REQUEST')
export const firebaseInitSuccess = createAction<{ user: User | null }>(
  'firebase/INIT_SUCCESS',
)
export const firebaseInitFailure = createAction<Error>('firebase/INIT_FAILURE')
export const firebaseInitCancel = createAction<undefined>('firebase/INIT_CANCEL')

export const firebaseLoginRequest = createAction<{
  email: string
  password: string
}>('firebase/LOGIN_REQUEST')
export const firebaseLoginSuccess = createAction<{ user: User | null }>(
  'firebase/LOGIN_SUCCESS',
)
export const firebaseLoginFailure = createAction<Error>('firebase/LOGIN_FAILURE')
export const firebaseLoginCancel = createAction<undefined>('firebase/LOGIN_CANCEL')

export const firebaseLogoutRequest = createAction<undefined>(
  'firebase/LOGOUT_REQUEST',
)
export const firebaseLogoutSuccess = createAction<undefined>(
  'firebase/LOGOUT_SUCCESS',
)
export const firebaseLogoutFailure = createAction<Error>('firebase/LOGOUT_FAILURE')
export const firebaseLogoutCancel = createAction<undefined>('firebase/LOGOUT_CANCEL')
