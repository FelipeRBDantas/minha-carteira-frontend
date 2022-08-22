import { takeLatest, all, call, put } from 'redux-saga/effects';

import { UserType, GET_USER_REQUEST } from '@store/modules/user/types';

import { getUserFailure, getUserSuccess } from '@store/modules/user/action';

import api from '@services/api';

let userApi: UserType;

const userRequest = async (name: string) => {
  try {
    const request = await api.get(`https://api.github.com/users/${name}`);

    const response = await request.data.json();

    userApi = response;

    return true;
  } catch (error) {
    return false;
  }
}

export function* userData(action: { type: string, payload: string }) {
    try {
        yield call(userRequest, action.payload);

        yield put(getUserSuccess(userApi));
    } catch (error) {
        yield put(getUserFailure(userApi));
    }
}

export default all([takeLatest(GET_USER_REQUEST, userData)]);
