import { all } from 'redux-saga/effects';

import user from '@store/modules/user/sagas';

export default function* rootSaga(): Generator<any> {
  return yield all([user]);
}
