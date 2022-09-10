import { createStore, applyMiddleware, Store, AnyAction } from 'redux';

import createSagaMiddleware from '@redux-saga/core';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '@store/rootReducers';

import rootSaga from '@store/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store: Store<unknown, AnyAction> = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() ?
  composeWithDevTools(applyMiddleware(sagaMiddleware)) : applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
