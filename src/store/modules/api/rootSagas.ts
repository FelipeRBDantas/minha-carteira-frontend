import { all, fork } from 'redux-saga/effects';

import endPoints from '@store/modules/api/endPoints/rootSagas';

export default function* rootSaga(): Generator<any> {
  return yield all([
    fork(endPoints),
  ]);
}
