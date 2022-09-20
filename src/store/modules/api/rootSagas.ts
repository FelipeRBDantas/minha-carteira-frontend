import { all, fork } from 'redux-saga/effects';

import login from '@store/modules/api/login/rootSagas';

export default function* rootSaga(): Generator<any> {
  return yield all([
    fork(login),
  ]);
}
