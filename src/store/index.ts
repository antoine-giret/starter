import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all, fork } from 'redux-saga/effects'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import * as Modules from './modules'

const rootReducer = combineReducers({
  firebase: Modules.FirebaseModule.firebaseReducer,
})

function* rootSaga() {
  yield all([fork(Modules.FirebaseModule.FirebaseSagas)])
}

export const rootActions = {
  ...Modules.FirebaseModule.FirebaseActions,
}

const sagaMiddleware = createSagaMiddleware()
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))
const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

export type TStore = typeof store
export type TRootReducer = typeof rootReducer
export type TRootState = ReturnType<typeof rootReducer>
export type TRootAction = typeof rootActions

export default store
