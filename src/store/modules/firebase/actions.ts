import { createAction } from 'redux-starter-kit'

export const firebaseInitRequest = createAction<undefined>('firebase/INIT_REQUEST')
export const firebaseInitSuccess = createAction<undefined>('firebase/INIT_SUCCESS')
export const firebaseInitFailure = createAction<Error>('firebase/INIT_FAILURE')
export const firebaseInitCancel = createAction<undefined>('firebase/INIT_CANCEL')
