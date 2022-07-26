import { all, fork } from 'redux-saga/effects';

import api from '@store/modules/api/rootSagas';

export default function* rootSaga(): Generator<any> {
  return yield all([
    fork(api)
  ]);
}
