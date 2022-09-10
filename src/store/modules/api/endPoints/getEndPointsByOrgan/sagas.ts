import { takeLatest, all, call, put } from 'redux-saga/effects';

import { GetEndPointsByOrganType, GET_ENDPOINTS_BY_ORGAN_REQUEST } from '@store/modules/api/endPoints/getEndPointsByOrgan/types';

import { getEndPointsByOrganFailure, getEndPointsByOrganSuccess } from '@store/modules/api/endPoints/getEndPointsByOrgan/action';

import { ReducerAction } from '@store/modules/api/endPoints/getEndPointsByOrgan/types';

import api, { APIResponse } from '@services/api';

let responseData: APIResponse;

const getEndPointsByOrganRequest = async (organId: number) => {
  try {
    const request = await api.get(`/urlEndPonts/orgao/${organId}`);

    responseData = { data: request.data, status: request.status};

    return true;
  } catch (error: any) {
    responseData = { data: error.response.data, status: error.response.status};

    return false;
  }
}

export function* request(action: ReducerAction) {
  try {
    yield call(getEndPointsByOrganRequest, action.params.organId);

    if (responseData.status === 200) {
      const getEndPointsByOrganType : GetEndPointsByOrganType = responseData.data;

      yield put(getEndPointsByOrganSuccess(getEndPointsByOrganType, action.params.organId));
    } else {
      yield put(getEndPointsByOrganFailure(responseData, action.params.organId));
    }
  } catch (error) {
    yield put(getEndPointsByOrganFailure(responseData, action.params.organId));
  }
}

export default all([takeLatest(GET_ENDPOINTS_BY_ORGAN_REQUEST, request)]);
