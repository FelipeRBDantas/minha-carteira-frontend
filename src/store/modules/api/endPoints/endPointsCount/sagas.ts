import { takeLatest, all, call, put } from 'redux-saga/effects';

import { EndPointsCountType, GET_ENDPOINTS_COUNT_REQUEST } from '@store/modules/api/endPoints/endPointsCount/types';

import { getEndPointsCountFailure, getEndPointsCountSuccess } from '@store/modules/api/endPoints/endPointsCount/action';

import { ReducerAction } from '@store/types';

import api, { APIResponse } from '@services/api';

let responseData: APIResponse;

const endPointsRequest = async () => {
  try {
    const request = await api.get('/urlEndPonts/count/urlByOrgao');

    responseData = { data: request.data, status: request.status};

    return true;
  } catch (error: any) {
    responseData = { data: error.response.data, status: error.response.status};

    return false;
  }
}

export function* request(action: ReducerAction) {
  try {
    yield call(endPointsRequest);

    if (responseData.status === 200) {
      const getEndPointsCount : EndPointsCountType = responseData.data;

      yield put(getEndPointsCountSuccess(getEndPointsCount));
    } else {
      yield put(getEndPointsCountFailure(responseData));
    }
  } catch (error) {
    yield put(getEndPointsCountFailure(responseData));
  }
}

export default all([takeLatest(GET_ENDPOINTS_COUNT_REQUEST, request)]);
