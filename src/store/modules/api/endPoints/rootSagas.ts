import { all } from 'redux-saga/effects';

import endPointsCount from '@store/modules/api/endPoints/endPointsCount/sagas';

import getEndPointsByOrgan from '@store/modules/api/endPoints/getEndPointsByOrgan/sagas';

import postEndPoint from '@store/modules/api/endPoints/postEndPoint/sagas';

import deleteEndPoint from '@store/modules/api/endPoints/deleteEndPoint/sagas';

export default function* rootSaga(): Generator<any> {
  return yield all([
    endPointsCount,
    getEndPointsByOrgan,
    postEndPoint,
    deleteEndPoint
  ]);
}
