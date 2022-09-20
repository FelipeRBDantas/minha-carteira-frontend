import { all } from 'redux-saga/effects';

import postLogin from '@store/modules/api/login/postLogin/sagas';

export default function* rootSaga(): Generator<any> {
  return yield all([
    postLogin
  ]);
}
