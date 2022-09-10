import { takeLatest, all, call, put } from 'redux-saga/effects';

import { DELETE_ENDPOINT_REQUEST } from '@store/modules/api/endPoints/deleteEndPoint/types';

import { deleteEndPointFailure, deleteEndPointSuccess } from '@store/modules/api/endPoints/deleteEndPoint/action';

import { ReducerAction } from '@store/modules/api/endPoints/deleteEndPoint/types';

import api, { APIResponse } from '@services/api';

let responseData: APIResponse;

const deleteEndPointRequest = async (endPointId: number) => {
  try {
    const request = await api.delete(`/urlEndPonts/${endPointId}`);

    responseData = { data: request.data, status: request.status};

    return true;
  } catch (error: any) {
    responseData = { data: error.response.data, status: error.response.status};

    return false;
  }
}

export function* request(action: ReducerAction) {
  try {
    yield call(deleteEndPointRequest, action.params.endPointId);

    if (responseData.status === 200) {
      const deleteEndPointType : any = responseData.data;

      yield put(deleteEndPointSuccess(deleteEndPointType, action.params.endPointId));
    } else {
      yield put(deleteEndPointFailure(responseData, action.params.endPointId));
    }
  } catch (error) {
    yield put(deleteEndPointFailure(responseData, action.params.endPointId));
  }
}

export default all([takeLatest(DELETE_ENDPOINT_REQUEST, request)]);
