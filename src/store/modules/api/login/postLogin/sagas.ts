import { takeLatest, all, call, put } from 'redux-saga/effects';

import { PostLoginData, PostLoginType, POST_LOGIN_REQUEST } from '@store/modules/api/login/postLogin/types';

import { postLoginSuccess, postLoginFailure } from '@store/modules/api/login/postLogin/action';

import { ReducerAction } from '@store/modules/api/login/postLogin/types';

import api, { APIResponse } from '@services/api';

let responseData: APIResponse;

const postLoginRequest = async (action: ReducerAction) => {
  try {
    const { payload }: { payload: PostLoginType } = action;

    const request = await api.post('/login', payload);

    responseData = { data: request.data, status: request.status};

    return true;
  } catch (error: any) {
    responseData = { data: error.response.data, status: error.response.status};

    return false;
  }
}

export function* request(action: ReducerAction) {
  try {
    yield call(postLoginRequest, action);

    if (responseData.status === 200) {
      const postLoginType : PostLoginData = responseData.data;

      yield put(postLoginSuccess(postLoginType));
    } else {
      yield put(postLoginFailure(responseData));
    }
  } catch (error) {
    yield put(postLoginFailure(responseData));
  }
}

export default all([takeLatest(POST_LOGIN_REQUEST, request)]);
