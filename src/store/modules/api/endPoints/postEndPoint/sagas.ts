import { takeLatest, all, call, put } from 'redux-saga/effects';

import { PostEndPointType, POST_ENDPOINT_REQUEST } from '@store/modules/api/endPoints/postEndPoint/types';

import { postEndPointSuccess, postEndPointFailure } from '@store/modules/api/endPoints/postEndPoint/action';

import { ReducerAction } from '@store/types';

import api, { APIResponse } from '@services/api';

let responseData: APIResponse;

const postEndPointRequest = async (action: ReducerAction) => {
  try {
    const { payload }: { payload: PostEndPointType } = action;

    const request = await api.post('/urlEndPonts', payload);

    responseData = { data: request.data, status: request.status};

    return true;
  } catch (error: any) {
    responseData = { data: error.response.data, status: error.response.status};

    return false;
  }
}

export function* request(action: ReducerAction) {
  try {
    yield call(postEndPointRequest, action);

    if (responseData.status === 200) {
      const postEndPointType : PostEndPointType = responseData.data;

      yield put(postEndPointSuccess(postEndPointType));
    } else {
      yield put(postEndPointFailure(responseData));
    }
  } catch (error) {
    yield put(postEndPointFailure(responseData));
  }
}

export default all([takeLatest(POST_ENDPOINT_REQUEST, request)]);
