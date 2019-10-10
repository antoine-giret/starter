import { createReducer } from 'redux-starter-kit'

import { FirebaseActions } from '.'

export interface IFirebaseState {
  initialized: boolean
}

const INITIAL_STATE: IFirebaseState = {
  initialized: false,
}

export const firebaseReducer = createReducer(INITIAL_STATE, {
  [FirebaseActions.firebaseInitSuccess.type]: (state: IFirebaseState) => {
    state.initialized = true
  },
})
